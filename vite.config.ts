import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		alias: {
			$utils: path.resolve('./src/utils'),
		},
	},
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
	},
})
