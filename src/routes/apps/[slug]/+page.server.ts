import type { App } from '$utils/constants.js'
import { getEntries } from '$utils/entries'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	const apps = (getEntries('apps') as App[]) || []
	return apps.map((app) => ({ slug: app.slug }))
}

export const load = ({ params }) => {
	const apps = (getEntries('apps') as App[]) || []
	const privacies = (getEntries('privacy') as App[]) || []

	const { slug } = params
	const app = apps.find((app) => app.slug === slug)
	const appPrivacies = privacies.find((app) => app.slug === slug)

	if (!app) {
		throw error(404, 'No app found')
	}

	if (appPrivacies) {
		app.privacy_content = true
	}

	return {
		app,
	}
}
