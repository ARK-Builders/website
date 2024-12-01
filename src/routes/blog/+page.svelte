<script lang="ts">
	import Blogs from '$lib/components/blogs/Blogs.svelte'
	import Head from '$lib/components/layouts/Head.svelte'

	export let data
	const { posts, tags } = data
</script>

<Head title="Blog" />

<Blogs title="Blog" {posts} {tags} />
