<script lang="ts">
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import Icon from '@iconify/svelte'

	export let text
	export let classes = ''
	export let removeButton = false

	$: url = text
</script>

<a
	href={base + '/tags/' + url}
	class="font-sebino flex items-center gap-1.5 rounded-md border bg-arkGray7 px-2 py-[2px] text-sm font-medium hover:bg-arkGray5 {classes}"
>
	{text}

	{#if removeButton}
		<button
			on:click|preventDefault|stopPropagation={() => goto('/blog')}
			class="border-l border-black"
		>
			<Icon icon="majesticons:multiply" />
		</button>
	{/if}
</a>
