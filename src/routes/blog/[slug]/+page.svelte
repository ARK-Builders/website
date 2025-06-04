<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte'
	import Blog from '$lib/components/blogs/Blog.svelte'
	import Head from '$lib/components/layouts/Head.svelte'

	export let data

	$: ({ post, author } = data)
</script>

<Head title={post.title} />

<Blog {post} {author} />

<BackToTop />
