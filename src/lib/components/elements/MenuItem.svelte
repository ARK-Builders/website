<script lang="ts">
	import { base } from '$app/paths'
	import { appLogos } from '$utils/constants'

	export let name,
		description = '',
		logo = '',
		url = ''
</script>

<a
	href={base + url + '/' + name.toLowerCase()}
	class="flex flex-row gap-3 rounded-md p-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
>
	<div class="flex">
		{#if !logo}
			<img src="{base}/images/placeholder.png" alt="app logo" />
		{:else}
			<svelte:component this={appLogos[logo.toLowerCase()]} />
		{/if}
	</div>
	<div class="flex flex-col">
		<p class="font-bold">{name}</p>
		<p class="max-w-24 truncate">{description || ''}</p>
	</div>
</a>
