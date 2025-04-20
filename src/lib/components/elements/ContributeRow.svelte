<script lang="ts">
	import Category from '$lib/components/elements/Category.svelte'
	import Language from '$lib/components/elements/Language.svelte'
	import Platform from '$lib/components/elements/Platform.svelte'
	import type { Issue } from '$utils/constants'

	export let issue: Issue

	const gotoIssue = () => {
		window.open(issue.repo + '/issues/' + issue.number, '_blank')
	}
</script>

<button
	on:click={gotoIssue}
	class="flex cursor-pointer flex-col gap-5 rounded-lg bg-arkDeep px-6 py-5 text-white hover:bg-arkDeep2"
>
	<p class="max-w-full truncate text-start text-xl">{issue.title}</p>

	<div class="flex flex-col-reverse gap-2 sm:flex-row sm:gap-10">
		<div class="flex flex-col gap-1">
			<p class="text-start font-bold">Language</p>
			<Language {issue} />
		</div>
		<div class="flex flex-row-reverse justify-end gap-3 sm:flex-row sm:gap-10">
			<div class="flex flex-col gap-1">
				<p class="text-start font-bold">Platforms</p>
				<Platform {issue} />
			</div>
			<div class="flex flex-col gap-1">
				<p class="text-start font-bold">Category</p>
				<Category {issue} />
			</div>
		</div>
	</div>
</button>
