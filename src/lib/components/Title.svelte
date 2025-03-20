<script lang="ts">
	export let title = 'Title'
	export let subtitle = ''
	export let h3 = false
	let selected = h3 ? 'h3' : 'h1'
</script>

{#if title}
	<svelte:element
		this={selected}
		class="{h3 ? 'text-2xl sm:text-3xl md:text-5xl' : 'text-3xl sm:text-4xl md:text-6xl'} 
			md:leading-14 font-extrabold capitalize leading-9 tracking-tight sm:leading-10"
	>
		{title}
	</svelte:element>
{/if}

{#if subtitle}
	<p class="text-lg leading-7 text-gray-700 dark:text-gray-400">
		{subtitle}
	</p>
{/if}
