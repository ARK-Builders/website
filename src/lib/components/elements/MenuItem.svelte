<script lang="ts">
	import { base } from '$app/paths'
	import { appLogos, type App } from '$utils/constants'

	export let app: App
	export let url = ''
</script>

<a
	href={base + url + '/' + app.title.toLowerCase()}
	class="flex flex-row gap-3 rounded-md p-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
>
	<div class="flex">
		{#if !appLogos.hasOwnProperty(app.title.toLowerCase())}
			<img src="{base}/images/placeholder.png" alt="app logo" />
		{:else}
			<svelte:component this={appLogos[app.slug]} />
		{/if}
	</div>
	<div class="flex flex-col">
		<p class="font-bold">{app.title}</p>
		<p class="max-w-24 truncate">{app.summary || ''}</p>
	</div>
</a>
