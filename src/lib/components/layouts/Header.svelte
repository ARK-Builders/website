<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import HeaderLogo from '$lib/assets/images/logo.svelte'
	import AppMenus from '$lib/components/AppMenus.svelte'
	import CommunityMenus from '$lib/components/CommunityMenus.svelte'
	import GetStarted from '$lib/components/GetStarted.svelte'
	import MobileMenu from '$lib/components/layouts/MobileMenu.svelte'
	import { config, navLinks } from '$lib/config'
	import Icon from '@iconify/svelte'

	let showMobileMenu = false
</script>

<header
	class="fixed top-0 z-20 w-full bg-arkGray bg-opacity-90 px-5 backdrop-blur-md dark:bg-gray-900 xl:px-0"
>
	<div class="mx-auto flex h-[72px] items-center justify-between lg:px-0 xl:max-w-7xl">
		<div class="flex flex-row items-center">
			<a href="{base}/" aria-label={config.headerTitle}>
				<div class="flex items-center justify-between">
					<div class="mr-3 h-10 w-auto">
						<HeaderLogo />
					</div>
				</div>
			</a>

			<div class="relative ml-5 hidden flex-row items-center gap-2 lg:flex">
				{#each navLinks as link}
					{#if link.title == 'Apps'}
						<AppMenus {link} />
					{:else if link.title == 'Community'}
						<CommunityMenus {link} />
					{:else}
						<div>
							<a
								href={base + link.href}
								class:active={$page.url.pathname == link.href}
								class="font-sebino flex h-9 items-center gap-1 rounded-lg bg-white/10 px-4 text-base font-medium text-arkGray7 hover:bg-arkOrangeLightM/10 hover:text-arkOrangeLightM"
							>
								<Icon icon={link.icon} width="{link.title == 'Blog' ? '20' : '24'}px" />
								{link.title}
							</a>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="flex flex-row items-center gap-3 text-base leading-5">
			<GetStarted href="/#apps" bgOrange classes="hidden sm:flex" />
			<button class="flex lg:hidden" on:click={() => (showMobileMenu = !showMobileMenu)}>
				<Icon icon="ic:outline-menu" width="34px" color="white" />
			</button>
		</div>
	</div>
</header>

{#if showMobileMenu}
	<MobileMenu bind:showMobileMenu />
{/if}

<style lang="postcss">
	.active {
		@apply bg-arkOrangeLightM/10 text-arkOrangeLightM;
	}
</style>
