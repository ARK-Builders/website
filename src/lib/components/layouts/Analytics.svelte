<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { analytics } from '$lib/config'
	import { onMount } from 'svelte'

	$: {
		if (browser && typeof window.gtag !== 'undefined') {
			window.gtag('config', analytics.googleAnalyticsId, {
				page_title: document.title,
				page_path: $page.url.pathname,
			})
		}
	}

	onMount(() => {
		if (browser) {
			window.dataLayer = window.dataLayer || []

			function gtag(...args: any[]) {
				window.dataLayer.push(args)
			}

			gtag('js', new Date())
			gtag('config', analytics.googleAnalyticsId)
		}
	})
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={analytics.googleAnalyticsId}">
	</script>
</svelte:head>
