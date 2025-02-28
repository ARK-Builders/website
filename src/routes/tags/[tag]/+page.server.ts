export const prerender = true

import type { Blog, TagType } from '$utils/constants'
import { getEntries, getTags } from '$utils/entries'
import { error } from '@sveltejs/kit'
import { slug } from 'github-slugger'

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const tags = (getTags() as TagType[]) || []
	return tags.map((tag: TagType) => ({ tag: tag.slug }))
}

function slugsArray(tags: string[]) {
	return tags?.map((t) => slug(t) || [])
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { tag } = params
	const posts = (getEntries('posts') as Blog[]) || []
	const filteredPosts = posts.filter((post) => slugsArray(post.tags).includes(tag))

	if (!filteredPosts) {
		throw error(404, 'No post found')
	}

	return {
		tag,
		posts: filteredPosts,
	}
}
