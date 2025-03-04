<script lang="ts">
	import { navigating } from '$app/stores'
	import '$lib/app.css'
	import '$lib/assets/styles/nprogress.css'
	import Footer from '$lib/components/layouts/Footer.svelte'
	import Header from '$lib/components/layouts/Header.svelte'
	import '@fontsource/jost'
	import NProgress from 'nprogress'
	import { setContext } from 'svelte'

	export let data
	setContext('apps', data.apps)

	NProgress.configure({
		minimum: 0.5,
		showSpinner: false,
		speed: 5,
		trickleSpeed: 200,
	})

	$: {
		if ($navigating) {
			NProgress.start()
		} else {
			NProgress.done()
		}
	}
</script>

<div class="mx-auto md:px-0">
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto mt-[72px] flex flex-col">
			<slot />
		</main>
		<Footer />
	</div>
</div>
