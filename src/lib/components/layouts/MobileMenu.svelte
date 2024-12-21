<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import GetStarted from '$lib/components/GetStarted.svelte'
	import { navLinks } from '$lib/config'
	import { appLogos, communityList, type App } from '$utils/constants'
	import Icon from '@iconify/svelte'
	import { getContext } from 'svelte'
	import { slide } from 'svelte/transition'

	export let showMobileMenu: boolean

	const apps = getContext('apps') as App[]
	const offMenu = () => (showMobileMenu = false)
</script>

<div
	transition:slide={{ axis: 'x', duration: 200 }}
	class="fixed left-0 top-0 z-20 flex h-full w-full flex-col gap-3 bg-arkGray2 px-5"
>
	<div class="absolute right-5 flex flex-row justify-end">
		<button class="mt-5" on:click={() => (showMobileMenu = !showMobileMenu)}>
			<Icon icon="gridicons:cross" width="34px" color="white" />
		</button>
	</div>

	<div class="mt-24 flex flex-col items-center justify-center gap-3">
		{#each navLinks as link}
			{#if ['Apps', 'Community'].includes(link.title)}
				<!-- <AppMenus {link} /> -->
			{:else}
				<div class="flex w-full items-center justify-center rounded-md bg-arkDeep2">
					<a
						on:click={() => (showMobileMenu = false)}
						href={base + link.href}
						class:underline={$page.url.pathname == link.href}
						class:!text-arkOrange2={$page.url.pathname == link.href}
						class="flex items-center gap-2 p-1 text-xl font-medium text-white hover:text-arkOrange sm:p-2"
					>
						{#if link.icon}
							<Icon icon={link.icon} width="{link.title == 'Blog' ? '20' : '24'}px" />
						{/if}
						{link.title}
					</a>
				</div>
			{/if}
		{/each}
	</div>

	<div class="flex w-full rounded-md bg-arkDeep2 p-4">
		<div class="grid w-full grid-cols-2 gap-4">
			{#each apps as app}
				<a
					on:click={offMenu}
					href={base + '/apps/' + app.slug}
					class="flex h-10 cursor-pointer flex-row items-center gap-4 hover:text-arkOrange"
				>
					<div class="flex h-full w-10 items-center justify-center rounded-full">
						{#if !appLogos.hasOwnProperty(app.title.toLowerCase())}
							<img src="{base}/images/placeholder.png" alt="app logo" />
						{:else}
							<svelte:component this={appLogos[app.title.toLowerCase()]} />
						{/if}
					</div>
					<p class="text-arkGray5">{app.title}</p>
				</a>
			{/each}
		</div>
	</div>

	<div class="flex w-full rounded-md bg-arkDeep2 p-4">
		<div class="grid w-full grid-cols-2 gap-3">
			{#each communityList as community}
				<a
					target="_blank"
					href={community.url}
					class="flex h-10 cursor-pointer flex-row items-center gap-4 hover:text-arkOrange"
				>
					<div
						class="flex h-full w-10 items-center justify-center rounded-full"
						style="background-color: {community.colors[0]}"
					>
						<Icon icon={community.logo} color={community.colors[1]} width="24px" />
					</div>
					<p class="text-arkGray5">
						{community.name}
					</p>
				</a>
			{/each}
		</div>
	</div>
	<div class="absolute bottom-2 w-[90%] sm:w-[95%]">
		<GetStarted on:click={offMenu} href="/#apps" bgOrange classes="justify-center" />
	</div>
</div>
