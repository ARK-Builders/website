<script lang="ts">
	import Tag from '$lib/components/elements/Tag.svelte'

	export let tags
</script>

<div class="flex flex-wrap">
	{#each tags as tag}
		<div class="flex flex-row gap-1">
			<Tag text={tag.text} size="text-xs" />
			<p class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">
				{` (${tag.count})`}
			</p>
		</div>
	{/each}
</div>
