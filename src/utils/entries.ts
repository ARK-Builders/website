import { browser } from '$app/environment'
import { config, user } from '$lib/config'
import type { Blog, TagType } from '$utils/constants'
import { slug } from 'github-slugger'

// we require some server-side APIs to parse all metadata
if (browser) {
	throw new Error(`apps can only be imported server-side`)
}

// we have to have separate functions for this because Vite only accepts literal strings for import.meta.glob
const getPosts = () => {
	return Object.entries(import.meta.glob('/content/blog/**/*.md', { eager: true }))
}

const getIssues = () => {
	return Object.entries(import.meta.glob('/content/issues/issues.json', { eager: true }))
}

const getApps = () => {
	return Object.entries(import.meta.glob('/content/apps/*.md', { eager: true }))
}

const getPrivacies = () => {
	return Object.entries(import.meta.glob('/content/apps/privacy-policy/*.md', { eager: true }))
}

const getAuthors = () => {
	return Object.entries(import.meta.glob('/content/authors/**/*.md', { eager: true }))
}

const getEntriesByType = (entryType: string) => {
	switch (entryType) {
		case 'posts':
			return getPosts()
		case 'privacy':
			return getPrivacies()
		case 'apps':
			return getApps()
		case 'authors':
			return getAuthors()
		default:
			throw new Error(`unknown entry type ${entryType}`)
	}
}

const getMetadata = (entryType: string, filepath: string, entry: any) => {
	return {
		...entry.metadata,

		author: entryType === 'posts' && !config.multiuser ? user.name : entry.metadata?.author,

		content: entry.default.render().html,

		// generate the slug from the file path
		slug: filepath
			.replace(/(\/index)?\.md/, '')
			.split('/')
			.pop(),

		youtube: entry.metadata?.video
			? entry.metadata?.video.replace(
					/(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)(\.com)?\/(watch\?v=)?/,
					''
				)
			: null,

		tag: entry.metadata?.type?.split(' ').shift().toLowerCase() || null,
		tags: entry.metadata?.tags || [],

		// whether or not this file is `my-post.md` or `my-post/index.md`
		// (needed to do correct dynamic import in posts/[slug].svelte)
		// isIndexFile: filepath.endsWith('/index.md')
	}
}

// Get all entries and add metadata
export const getEntries = (entryType: string, includeDraft: boolean = false) => {
	if (!config.multiuser && entryType === 'authors') return [user]
	if (entryType == 'issues') {
		const issues = getIssues()
		return issues.map(([filepath, entry]) => entry)[0]
	}
	const entries = getEntriesByType(entryType)

	return (
		entries
			// format metadata and content
			.map(([filepath, entry]) => getMetadata(entryType, filepath, entry))
			// remove drafts
			.filter((entry) => {
				if (includeDraft) return includeDraft
				else return !entry.draft
			})
			// sort by date
			.sort((a, b) => (a.date < b.date ? 1 : -1))
			// add references to the next/previous entry
			.map((entry, index, allEntries) => ({
				...entry,
				next: allEntries[index - 1],
				prev: allEntries[index + 1],
			}))
	)
}

export const getTags = () => {
	const posts = getEntries('posts') as Blog[]
	let tags = posts
		.flatMap(({ tags }) => tags)
		.map((tag) => ({ text: tag, slug: slug(tag) }))
		.reduce((arr: TagType[], tag) => {
			let index = arr.findIndex((t) => t.slug === tag.slug)
			if (index > -1) arr[index].count++
			else arr.push({ text: tag.text, slug: tag.slug, count: 1 })
			return arr
		}, [])
		.sort((a, b) => (b.text < a.text ? 1 : -1))

	return tags
}
