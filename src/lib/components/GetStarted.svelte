<script lang="ts">
	import { base } from '$app/paths'

	export let href = ''
	export let bgOrange = false
	export let classes = ''
</script>

<a
	on:click
	href="{base}{href}"
	class="{bgOrange
		? 'bg-arkOrange hover:bg-arkOrangeDeep'
		: 'bg-black'} font-sebino flex h-10 items-center rounded-md px-4 text-white {classes}"
>
	Get Started
</a>
