<script lang="ts">
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import MenuItem from '$lib/components/elements/MenuItem.svelte'
	import { type App } from '$utils/constants'
	import Icon from '@iconify/svelte'
	import { getContext } from 'svelte'

	export let link

	const apps = getContext('apps') as App[]
</script>

<div class="menus">
	<a
		class:active={$page.url.pathname.includes('/apps')}
		href={base + link.href}
		class="flex h-9 items-center gap-1 rounded-lg bg-white/10 p-1 px-4 font-medium text-arkGray7 hover:bg-arkOrangeLightM/10 hover:text-arkOrangeLightM dark:text-gray-100"
	>
		<Icon icon="tdesign:app-filled" width="19px" />
		{link.title}
	</a>
	<div id="apps-menu" class="absolute left-20 top-9 pt-2">
		<div class="grid w-96 grid-cols-2 rounded-xl border border-gray-300 bg-white p-2">
			<div class="flex w-full flex-col gap-2">
				{#each apps.slice(0, 1) as app}
					<MenuItem url={link.href} {app} />
				{/each}
			</div>
			<div class="flex w-full flex-col gap-2">
				{#each apps.slice(1) as app}
					<MenuItem {app} url={link.href} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	#apps-menu {
		display: none;
	}
	.menus:hover #apps-menu {
		display: grid;
	}

	.active {
		@apply bg-arkOrangeLightM/10 text-arkOrangeLightM;
	}
</style>
