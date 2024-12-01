<script lang="ts">
	import { base } from '$app/paths'
	import { config } from '$lib/config'
	import type { Blog } from '$utils/constants'

	export let post: Blog
</script>

<article>
	<a
		href="{base}/blog/{post.slug}"
		class="flex flex-col gap-3 rounded-xl bg-arkGray5 p-5 hover:bg-arkOrangeLight"
	>
		<div class="flex h-56 flex-col">
			<time dateTime={post.date ?? post.date} class="text-arkGray4">
				{new Date(post.date).toLocaleDateString(config.locale, {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</time>
			<p class="text-2xl font-extrabold">{post.title}</p>
			<div class="">
				<p class="line-clamp-5">
					{post.summary}
				</p>
			</div>
		</div>
		<!-- <a href="{base}/blog/{post.slug}" class="w-fit font-bold text-arkOrange">Read</a> -->
	</a>
</article>
