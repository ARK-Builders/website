import type { App } from '$utils/constants.js'
import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const apps = (getEntries('privacy') as App[]) || []
	return apps.map((app) => ({ slug: app.slug }))
}

export const load = ({ params }) => {
	const privacies = (getEntries('privacy') as App[]) || []
	const { slug } = params
	const app = privacies.find((app) => app.slug === slug)

	if (!app) {
		throw error(404, 'No privacy found')
	}

	return {
		app,
	}
}
