export const prerender = true
export const ssr = true
export const trailingSlash = 'always'

import type { App } from '$utils/constants'
import { getEntries } from '$utils/entries'

export async function load() {
	const apps = getEntries('apps') as App[]

	return {
		apps: apps || [],
	}
}
