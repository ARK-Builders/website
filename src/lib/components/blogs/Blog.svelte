<script lang="ts">
	import { base } from '$app/paths'
	import Author from '$lib/components/Author.svelte'
	import BlogItem from '$lib/components/blogs/BlogItem.svelte'
	import Tag from '$lib/components/elements/Tag.svelte'
	import RenderMarkdown from '$lib/components/RenderMarkdown.svelte'
	import { config } from '$lib/config'
	import type { Blog } from '$utils/constants'

	export let post: Blog
	export let author
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0">
	<article>
		<div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
			<header class="pt-6 xl:pb-6">
				<div class="space-y-1 text-center lg:text-start">
					<div class="py-5">
						<h1
							class="md:leading-14 text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-snug md:text-[56px]"
						>
							{post.title}
						</h1>
					</div>
					<div class="flex flex-row items-center gap-4">
						<dl class="py-3">
							<dt class="sr-only">Authors</dt>
							<dd>
								<ul
									class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
								>
									<li class="flex items-center space-x-2">
										<Author author={author.name} avatar={author.avatar} twitter={author.twitter} />
									</li>
								</ul>
							</dd>
						</dl>
						<div class="flex flex-col border-s-2 pl-4 text-start">
							<dt class="sr-only">Published on</dt>
							<dd class="font-sebino leading-6 text-arkGray">
								Published on: <time dateTime={post.date}>
									{new Date(post.date).toLocaleDateString(config.locale, {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</time>
							</dd>
							<dd class="font-sebino leading-6 text-arkGray">
								Last Update:
								<time dateTime={post.updated_at ?? post.date}>
									{new Date(post.updated_at ?? post.date).toLocaleDateString(config.locale, {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</time>
							</dd>
						</div>
					</div>

					{#if post.tags.length}
						<div class="flex flex-row flex-wrap gap-2 py-4">
							{#each post.tags as tag}
								<Tag text={tag} />
							{/each}
						</div>
					{/if}

					<dl class="space-y-10">
						<dd class="font-sebino mt-4 text-justify text-[18px] lg:text-start">
							{post.summary}
						</dd>
					</dl>
				</div>
			</header>
			<div
				class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
				style="grid-template-rows: auto 1fr;"
			>
				<div
					class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-4 xl:row-span-2 xl:pb-0"
				>
					<div
						class="font-sebino prose max-w-none pb-8 pt-10 text-xl text-arkGray prose-a:text-arkOrange prose-a:no-underline hover:prose-a:underline"
					>
						{#if post.image}
							<img
								alt={post.image.split('/').reverse()[0]}
								src={base + post.image}
								class="h-auto w-full object-cover object-center"
							/>
						{/if}
						<RenderMarkdown content={post.content} />
					</div>
				</div>
			</div>

			<footer class="">
				<div class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700">
					{#if post.next || post.prev}
						<h2 class="py-4 text-2xl font-bold">More Blog Posts</h2>

						<div class="flex flex-row gap-4 py-4 xl:py-8">
							{#if post.prev}
								<div class="max-w-md flex-1">
									<p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
										Previous Article
									</p>
									<div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
										<!-- <a href={base + `/blog/${post.prev.slug}`}>{post.prev.title}</a> -->
										<BlogItem post={post.prev} />
									</div>
								</div>
							{/if}
							{#if post.next}
								<div class="max-w-md flex-1">
									<p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
										Next Article
									</p>
									<div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
										<!-- <a href={base + `/blog/${post.next.slug}`}>{post.next.title}</a> -->
										<BlogItem post={post.next} />
									</div>
								</div>
							{/if}
						</div>
					{/if}
				</div>
			</footer>
		</div>
	</article>
</div>
