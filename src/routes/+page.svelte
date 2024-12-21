<script lang="ts">
	import Head from '$lib/components/layouts/Head.svelte'
	import AnimatedFeatures from '$lib/components/sections/AnimatedFeatures.svelte'
	import Blog from '$lib/components/sections/Blog.svelte'
	import Contribute from '$lib/components/sections/Contribute.svelte'
	import Hero from '$lib/components/sections/Hero.svelte'
	import OurApps from '$lib/components/sections/OurApps.svelte'
	import Support from '$lib/components/sections/Support.svelte'
	import Youtube from '$lib/components/sections/Youtube.svelte'

	export let data

	$: ({ posts } = data)
</script>

<Head />
<Hero />
<AnimatedFeatures />
<OurApps />
<Blog {posts} />
<Youtube />
<Contribute />
<Support />
