<script lang="ts">
	import '$lib/app.css'
	import Footer from '$lib/components/layouts/Footer.svelte'
	import Header from '$lib/components/layouts/Header.svelte'
	import '@fontsource/jost'
	import { setContext } from 'svelte'

	export let data
	setContext('apps', data.apps)
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
