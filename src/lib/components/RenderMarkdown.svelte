<script lang="ts">
	import { base } from '$app/paths'

	export let content

	function transformImagePaths(htmlContent: string) {
		return htmlContent.replace(/(<img[^>]+src=")([^"]+)(")/gi, (match, prefix, src, suffix) => {
			// Skip absolute URLs
			if (src.startsWith('http') || src.startsWith('//')) {
				return match
			}

			// Prepend base path if not already present
			const transformedSrc = src.startsWith(base) ? src : `${base}${src}`.replace(/\/\//, '/')
			return `${prefix}${transformedSrc}${suffix}`
		})
	}

	$: transformedContent = transformImagePaths(content)
</script>

{@html transformedContent}

<style lang="postcss">
	:global(h2) {
		font-family: 'Inter Variable', sans-serif;
		font-size: 24px !important;
	}
</style>
