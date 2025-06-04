import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		// csp: {
		// 	mode: 'hash',
		// 	directives: { 'script-src': ['self'] },
		// },
		adapter: adapter({
			fallback: 'app.html',
		}),
		paths: {
			base: process.env.BASE_PATH || '',
		},
		prerender: {
			crawl: true,
			handleMissingId: 'warn',
		},
	},
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],
}

export default config
