<script lang="ts">
	import { base } from '$app/paths'
	import CommunityMenuItem from '$lib/components/elements/CommunityMenuItem.svelte'
	import { communityList } from '$utils/constants'
	import Icon from '@iconify/svelte'

	export let link
</script>

<div class="menus">
	<a
		href={base + link.href}
		class="font-sebino flex h-9 items-center gap-1 rounded-lg bg-white/10 p-1 px-4 text-arkGray7 hover:bg-arkOrangeLightM/10 hover:text-arkOrangeLightM dark:text-gray-100"
	>
		<Icon icon="fluent:people-community-28-filled" width="22px" />
		<span class="mt-1">
			{link.title}
		</span>
	</a>
	<div class="apps-menu absolute top-9 pt-2">
		<div class="grid w-96 grid-cols-2 rounded-xl border border-gray-300 bg-white p-4">
			<div class="flex w-44 flex-col gap-3">
				{#each communityList.slice(0, 4) as menu}
					<CommunityMenuItem {menu} />
				{/each}
			</div>
			<div class="flex w-40 flex-col gap-3">
				{#each communityList.slice(4) as menu}
					<CommunityMenuItem {menu} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.apps-menu {
		display: none;
	}
	.menus:hover .apps-menu {
		display: grid;
	}
</style>
