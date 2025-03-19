<script lang="ts">
	import { base } from '$app/paths'
	import Cta from '$lib/components/elements/CTA.svelte'
	import Image from '$lib/components/elements/Image.svelte'
	import Head from '$lib/components/layouts/Head.svelte'
	import RenderMarkdown from '$lib/components/RenderMarkdown.svelte'
	import Title from '$lib/components/Title.svelte'
	import { appLogos } from '$utils/constants'
	import Icon from '@iconify/svelte'

	export let data

	let hoverGithub = false

	$: app = data.app
</script>

<Head title="Apps | {app.title}" />

<div class="flex h-full w-full flex-col items-center p-3 lg:p-0">
	<div
		class="my-10 flex w-full max-w-[50rem] flex-col justify-between gap-4 lg:flex-row lg:items-center"
	>
		<div class="flex flex-row items-center gap-4">
			<div class="flex h-10 w-10 items-center">
				{#if !app.slug}
					<img src="{base}/images/placeholder.png" alt="app logo" />
				{:else}
					<svelte:component this={appLogos[app.slug.toLowerCase()]} />
				{/if}
			</div>
			<Title title={app.title} h2 />
		</div>

		<div class="flex flex-col gap-3 lg:flex-row">
			<Cta text="Download for Android" bgBlack url={app?.android_download ?? ''}>
				<Icon class={'text-white'} icon="fa:android" width="24px" />
			</Cta>

			<Cta classes="border items-center pointer-events-none !bg-gray-200 text-gray-500">
				<div class="flex flex-col items-center">
					<span class="text-xs">Coming soon</span>
					<span class="text-lg"> Download for iOS</span>
				</div>
				<Icon class={'text-gray-500'} icon="ic:round-apple" width="30px" />
			</Cta>
		</div>
	</div>

	<div class="mx-auto flex w-full max-w-[50rem] flex-col gap-5">
		<div class="prose w-full max-w-none text-justify">
			<RenderMarkdown content={app.content} />
		</div>

		<h2 class="text-4xl font-bold">App Preview</h2>

		{#if app.preview && app.preview.length}
			<div class="flex grid-cols-3 gap-2 overflow-x-auto lg:grid lg:w-fit">
				{#each app.preview as preview}
					<Image src={base + preview} class="max-h-[560px] max-w-[300px]" alt="app preview" />
					<!-- <img class="max-h-[560px] max-w-[300px]" src={base + preview} alt="app preview" /> -->
				{/each}
			</div>
		{/if}

		<div class="flex flex-col gap-3 lg:flex-row">
			<Cta text="View documentation" bgBlack />

			<Cta
				on:hover={(e) => (hoverGithub = e.detail)}
				target="_blank"
				text="View on Github"
				classes="border border-arkGray px-2 !text-lg lg:!text-xl"
				url={app?.github}
			>
				<Icon
					class={hoverGithub ? 'text-arkOrange' : 'text-black'}
					icon="pajamas:github"
					width="24px"
				/>
			</Cta>

			{#if app?.privacy_content}
				<Cta
					classes="border border-arkGray px-2"
					text="Privacy policy"
					url={app?.slug + '/privacy-policy'}
				/>
			{/if}
		</div>
	</div>
</div>
