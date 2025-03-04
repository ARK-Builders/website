<script lang="ts">
	import { page } from '$app/stores'
	import BlogItem from '$lib/components/blogs/BlogItem.svelte'
	import Tag from '$lib/components/elements/Tag.svelte'
	import SearchBox from '$lib/components/SearchBox.svelte'
	import Title from '$lib/components/Title.svelte'
	import type { Blog } from '$utils/constants'
	import fuzzySearch from '$utils/search'
	import { onMount } from 'svelte'

	export let title = ''
	export let subtitle = ''
	export let posts: Blog[] = []
	export let tag: string | null = null
	export let search = false
	export let h2 = false
	export let count = 0

	let filter: string | null = null

	if (count) {
		posts = posts.slice(0, count)
	}
	onMount(() => {
		filter = $page.url.searchParams.get('query')
	})

	$: currentPosts = filter ? fuzzySearch(posts, filter) : posts
</script>

<div class="mx-auto w-full max-w-7xl px-5 xl:px-0">
	<div class="space-y-2 pb-8 pt-6 md:space-y-5">
		<div class="flex w-full flex-col items-center justify-center gap-5">
			<Title {title} {subtitle} {h2} />

			<div class="w-full">
				{#if search}
					<SearchBox />
				{/if}

				{#if tag}
					<div class="flex w-full flex-row justify-center gap-2">
						<p class=" text-arkGray3">Showing blog posts tagged with:</p>
						<Tag text={tag} classes="capitalize bg-[#F2D2B1]" removeButton />
					</div>
				{/if}
			</div>
		</div>
	</div>
	{#if !currentPosts.length}
		No post found.
	{:else}
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each currentPosts as post}
				<BlogItem {post} taggedFilter={tag} />
			{/each}
		</div>
	{/if}
</div>
