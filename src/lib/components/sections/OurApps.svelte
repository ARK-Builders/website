<script lang="ts">
	import { base } from '$app/paths'
	import MemoImage1 from '$lib/assets/images/apps/memo/1.png'
	import MemoImage2 from '$lib/assets/images/apps/memo/2.png'
	import MemoImage3 from '$lib/assets/images/apps/memo/3.png'
	import MemoImage4 from '$lib/assets/images/apps/memo/4.png'
	import MemoImage5 from '$lib/assets/images/apps/memo/5.png'
	import MemoImage6 from '$lib/assets/images/apps/memo/6.png'
	import RateImage1 from '$lib/assets/images/apps/rate/1.png'
	import RateImage2 from '$lib/assets/images/apps/rate/2.png'
	import RateImage3 from '$lib/assets/images/apps/rate/3.png'
	import RateImage4 from '$lib/assets/images/apps/rate/4.png'
	import RateImage5 from '$lib/assets/images/apps/rate/5.png'
	import RateImage6 from '$lib/assets/images/apps/rate/6.png'
	import RetouchImage1 from '$lib/assets/images/apps/retouch/1.png'
	import RetouchImage2 from '$lib/assets/images/apps/retouch/2.png'
	import RetouchImage3 from '$lib/assets/images/apps/retouch/3.png'
	import Cta from '$lib/components/elements/CTA.svelte'
	import Image from '$lib/components/elements/Image.svelte'
	import { appLogos, type App } from '$utils/constants'
	import { getContext } from 'svelte'

	const apps = getContext('apps') as App[]

	const appImages: Record<string, string> = {
		rate1: RateImage1,
		rate2: RateImage2,
		rate3: RateImage3,
		rate4: RateImage4,
		rate5: RateImage5,
		rate6: RateImage6,
		memo1: MemoImage1,
		memo2: MemoImage2,
		memo3: MemoImage3,
		memo4: MemoImage4,
		memo5: MemoImage5,
		memo6: MemoImage6,
		retouch1: RetouchImage1,
		retouch2: RetouchImage2,
		retouch3: RetouchImage3,
	}

	// const getImagesWithName = (name: string) =>
	// 	Object.entries(appImages).filter((value) => value[0].includes(name))

	const getImagesWithName = (name: string) =>
		Object.entries(appImages)
			.filter((value) => value[0].includes(name.toLowerCase()))
			.map(([key, value]) => value)

	let activeApp = apps[0]

	$: activeAppImages = getImagesWithName(activeApp.title)
</script>

<section id="apps" class="relative flex pb-12 pt-16 lg:px-5 xl:px-0">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 lg:gap-10 lg:px-0">
		<div class="my-5 flex w-full flex-col">
			<p class="text-center text-4xl font-bold md:text-5xl lg:text-6xl">Our Apps</p>
		</div>

		<div class="flex w-full flex-col gap-4 lg:flex-row xl:gap-7">
			<!-- Left side panel -->
			<div
				class="grid h-fit w-full grid-cols-3 flex-row overflow-hidden rounded-lg px-4 md:flex lg:w-1/5 lg:flex-col"
			>
				{#each apps as app}
					<button
						style="background-color: {activeApp.title == app.title ? app.colors?.[1] : ''};"
						on:click={() => {
							activeApp = app
							activeAppImages = getImagesWithName(app.title)
						}}
						class="
						{activeApp.title != app.title ? ' hover:bg-arkGray5' : ''} 
						flex w-full flex-col items-center gap-3 border-b bg-arkGray6
						px-5 py-3 font-semibold first:rounded-tl-lg last:rounded-br-lg last:border-b-0 lg:h-[88px] lg:flex-row lg:first:rounded-tr-lg lg:last:rounded-bl-lg"
					>
						{#if !appLogos.hasOwnProperty(app.title.toLowerCase())}
							<img src="{base}/images/placeholder.png" alt="app logo" />
						{:else}
							<svelte:component this={appLogos[app.title.toLowerCase()]} />
						{/if}
						{app.title}
					</button>
				{/each}
			</div>

			<!-- App details -->
			<div
				style="background-color: {activeApp.colors?.[0]};"
				class="flex w-full flex-col items-center justify-between gap-3 rounded-md p-5 lg:w-4/5 lg:items-start"
			>
				<div class="flex max-w-full flex-col items-center gap-3 lg:items-start">
					<p class="text-center text-2xl font-bold lg:text-start lg:text-3xl">{activeApp.title}</p>
					<p class="text-center lg:text-start">{activeApp?.summary}</p>

					<div class="flex-flow flex max-w-full gap-3 overflow-x-auto">
						{#each activeAppImages as image, i}
							{#key image}
								<Image src={image} class="min-w-[300px]" />
							{/key}
						{/each}
					</div>
				</div>
				<Cta url={'/apps/' + activeApp.slug} text="Learn More" bgBlack />
			</div>
		</div>
	</div>
</section>
