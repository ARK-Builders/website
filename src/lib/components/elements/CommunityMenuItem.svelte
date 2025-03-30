<script lang="ts">
	import Icon from '@iconify/svelte'

	export let menu
</script>

<a
	target="_blank"
	href={menu.url}
	class:pointer-events-none={!menu.url}
	class="flex h-10 cursor-pointer flex-row items-center gap-4 hover:text-arkOrange"
>
	<div
		class="flex h-full w-10 items-center justify-center rounded-full"
		style="background-color: {menu.colors[0]}"
	>
		<Icon icon={menu.logo} color={menu.colors[1]} width="24px" />
	</div>
	<p class="font-sebino text-lg">{menu.name}</p>
</a>
