<script lang="ts">
	import Icon from '@iconify/svelte'
	import { onMount } from 'svelte'

	export let src
	export let loading = true

	let loaded = false

	onMount(() => {
		const img = new Image()
		img.src = src
		loading = true

		img.onload = () => {
			loading = false
			loaded = true
		}
		img.onerror = () => {
			loading = false
		}
	})
</script>

{#if loaded}
	<img {src} alt="app screenshot" class="max-h-[500px] xl:max-h-[600px]" {...$$restProps} />
{:else if loading}
	<div class="flex h-full max-h-[500px] w-[150px] flex-col items-center xl:max-h-[600px]">
		<Icon icon="ei:spinner-3" class="animate-spin" width="50px" />
	</div>
{/if}
