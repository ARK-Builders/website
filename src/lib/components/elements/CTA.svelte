<script lang="ts">
	import { base } from '$app/paths'
	import { createEventDispatcher } from 'svelte'

	export let text = ''
	export let bgBlack = false
	export let classes = ''
	export let url = '#'
	export let target = ''

	const dispatch = createEventDispatcher()
</script>

<a
	on:mouseenter={() => dispatch('hover', true)}
	on:mouseleave={() => dispatch('hover', false)}
	target={target && target}
	href={url?.indexOf('https://') != -1 ? url : base + url}
	class="{bgBlack
		? 'bg-black text-white hover:bg-arkOrange'
		: 'bg-white text-black hover:text-arkOrange'} font-sebino flex h-11 w-fit items-center gap-2 rounded-md px-4 text-xl {classes}"
>
	{text}
	<slot />
</a>
