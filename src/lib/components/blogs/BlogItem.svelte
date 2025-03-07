<script lang="ts">
	import { base } from '$app/paths'
	import Image from '$lib/components/elements/Image.svelte'
	import Tag from '$lib/components/elements/Tag.svelte'
	import { config } from '$lib/config'
	import type { Blog } from '$utils/constants'

	export let post: Blog

	let hover: boolean = false
</script>

<article on:mouseenter={() => (hover = true)} on:mouseleave={() => (hover = false)}>
	<a
		href="{base}/blog/{post.slug}"
		class="flex flex-col gap-3 rounded-2xl bg-arkGray5 hover:bg-arkOrangeLight"
	>
		<div class="flex flex-col gap-2">
			<div class="overflow-hidden rounded-t-2xl">
				<Image
					src="{base}{post.image ??
						'https://placehold.co/100x100/EEA050/white/?text=' + post.title}"
					class="h-40 w-full rounded-t-xl object-cover object-top md:h-52 {hover && 'scale-105'}"
				/>
			</div>

			<div class="flex h-60 flex-col gap-1 px-2 md:px-5">
				<time dateTime={post.date ?? post.date} class="text-arkGray4">
					{new Date(post.date).toLocaleDateString(config.locale, {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</time>
				<p class="text-lg font-semibold md:text-2xl {hover && 'underline'}">
					{post.title}
				</p>
				<div class="font-sebino">
					<p class={post.title.length > 40 ? 'line-clamp-3' : 'line-clamp-4'}>
						{post.summary}
					</p>
				</div>

				{#if post.tags.length}
					<div class="flex flex-row flex-wrap gap-2 py-2">
						{#each post.tags as tag}
							<Tag text={tag} />
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</a>
</article>
