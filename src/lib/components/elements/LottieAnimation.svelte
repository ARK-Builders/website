<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	export let src
	export let width = '100%'
	export let height = '100%'

	onMount(async () => {
		if (browser) {
			await import('@lottiefiles/lottie-player')
		}
	})
</script>

{#if browser}
	<lottie-player
		{src}
		background="transparent"
		speed="1"
		style="width: {width}; height: {height}"
		loop
		autoplay
	>
	</lottie-player>
{/if}
