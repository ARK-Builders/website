export const prerender = true
export const ssr = true

import type { Author, Blog } from '$utils/constants'
import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const posts = (getEntries('posts', true) as Blog[]) || []
	return posts.map((post: Blog) => ({ slug: post.slug }))
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const posts = (getEntries('posts', true) as Blog[]) || []
	const authors = (getEntries('authors') as Author[]) || []
	const { slug } = params
	const post = posts.find((p) => p.slug === slug)
	const author = authors.find((a) => a.id === post?.authorId)

	if (!post) {
		throw error(404, 'No post found')
	}

	return {
		post,
		author,
	}
}
