<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { analytics } from '$lib/firebase'
	import { logEvent } from 'firebase/analytics'

	$: if (browser && analytics) {
		const { pathname } = $page.url
		logEvent(analytics, 'page_view', {
			page_path: pathname,
			page_title: document.title,
			page_location: location.href,
		})
	}
</script>
