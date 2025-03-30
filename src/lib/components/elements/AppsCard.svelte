<script lang="ts">
	import { base } from '$app/paths'
	import MemoImage1 from '$lib/assets/images/apps/memo/1.png'
	import RateImage1 from '$lib/assets/images/apps/rate/1.png'
	import { appLogos, type App } from '$utils/constants'

	export let app: App

	const appImages: Record<string, string> = {
		rate1: RateImage1,
		memo1: MemoImage1,
	}

	const getImagesWithName = (name: string) =>
		Object.entries(appImages).filter((value) => value[0].includes(name))[0]
</script>

<div class="flex flex-col gap-3 rounded-xl bg-arkGray5 p-5">
	<div class="flex flex-row items-center gap-2">
		<div class="flex h-10 w-10 items-center">
			{#if !app.title}
				<img src="{base}/images/placeholder.png" alt="app logo" />
			{:else}
				<svelte:component this={appLogos[app.title.toLowerCase()]} />
			{/if}
		</div>

		<a href="{base}/apps/{app.slug}" class="text-2xl font-semibold hover:underline">{app.title}</a>
	</div>

	<img
		class="max-h-[220px] rounded-md object-cover object-top lg:max-h-[350px]"
		src={getImagesWithName(app.title.toLowerCase())[1]}
		alt="{app.title} app screens"
	/>

	<a
		href="{base}/apps/{app.slug}"
		class="w-full rounded-md bg-arkGray p-2 text-center font-semibold text-white hover:bg-opacity-90"
		>Learn More</a
	>
</div>
