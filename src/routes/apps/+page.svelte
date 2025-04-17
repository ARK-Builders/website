<script lang="ts">
	import AppsCard from '$lib/components/elements/AppsCard.svelte'
	import Head from '$lib/components/layouts/Head.svelte'
	import Title from '$lib/components/Title.svelte'

	export let data
</script>

<Head title="Apps" />

<div class="flex h-full w-full flex-col items-center">
	<div class="my-10">
		<Title title="Our Apps" h3 />
	</div>

	<div class="mx-auto grid w-full max-w-7xl grid-cols-2 gap-4 px-3 lg:grid-cols-3 xl:px-0">
		{#each data.apps as app}
			<AppsCard {app} />
		{/each}
	</div>
</div>
