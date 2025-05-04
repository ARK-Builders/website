<script lang="ts">
	import Icon from '@iconify/svelte'
	import { slide } from 'svelte/transition'

	export let title = ''
	export let zOrder = 1
	export let items: string[] = []
	export let values: string[] = []

	let showList = false

	$: label = values.length > 1 ? `${values[0]} + ${values.length - 1}` : values.toString()
</script>

<div class="relative w-44">
	<button
		class="flex h-9 w-full items-center justify-between truncate rounded bg-arkGray2 px-2 capitalize text-arkGray5 focus:border focus:border-arkOrange"
		on:click={() => (showList = !showList)}
	>
		{label ? label : title}
		<Icon icon={showList ? 'mdi:chevron-up' : 'mdi:chevron-down'} width="24px" />
	</button>
	{#if showList}
		<div
			style="z-index: {zOrder}"
			transition:slide={{ axis: 'y', duration: 200 }}
			class="absolute top-10 flex w-full flex-col items-center border border-arkDeep2 bg-arkGray2 py-2"
		>
			{#each items as item}
				<label
					class="flex w-full cursor-pointer flex-row items-center justify-between p-2 hover:bg-arkGray"
				>
					<span class="capitalize text-arkGray5">
						{item}
					</span>
					<input value={item} type="checkbox" bind:group={values} class="checkbox" />
				</label>
			{/each}
		</div>
	{/if}
</div>

<style>
	.checkbox {
		@apply relative h-4 w-4 cursor-pointer appearance-none rounded border-2 border-gray-300; /* Default styles */
	}

	.checkbox:checked {
		@apply border border-arkOrange bg-arkOrange;
	}

	.checkbox:checked::after {
		content: '\2714';
		font-size: 12px;
		top: -1px;
		@apply absolute text-black;
	}
</style>
