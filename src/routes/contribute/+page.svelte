<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Category from '$lib/components/elements/Category.svelte'
	import ContributeRow from '$lib/components/elements/ContributeRow.svelte'
	import Cta from '$lib/components/elements/CTA.svelte'
	import Dropdown from '$lib/components/elements/Dropdown.svelte'
	import Language from '$lib/components/elements/Language.svelte'
	import Platform from '$lib/components/elements/Platform.svelte'
	import Head from '$lib/components/layouts/Head.svelte'
	import Title from '$lib/components/Title.svelte'
	import { config } from '$lib/config'
	import type { Issue } from '$utils/constants.ts'
	import Icon from '@iconify/svelte'
	import { onMount } from 'svelte'

	export let data

	let hoverGithub = false
	let issues: Issue[]
	let selectedLanguages: string[] = []
	let selectedPlatforms: string[] = []
	let selectedCategory: string[] = []

	$: issues = JSON.parse(data.data).default

	$: generalIssues = [
		...new Set(issues.filter((issue: Issue) => !issue.labels.length).flat()),
	] as Issue[]
	$: languages = [...new Set(issues.map((issue: Issue) => issue.languages).flat())] as string[]
	$: platforms = [...new Set(issues.map((issue: Issue) => issue.platforms).flat())] as string[]
	$: categories = [...new Set(issues.map((issue: Issue) => issue.labels).flat())] as string[]

	$: filteredIssues = issues.filter((issue) => {
		const languageMatch =
			selectedLanguages.length === 0 ||
			issue.languages.some((lang) => selectedLanguages.includes(lang))
		const platformMatch =
			selectedPlatforms.length === 0 ||
			issue.platforms.some((platform) => selectedPlatforms.includes(platform))
		const categoryMatch =
			selectedCategory.length === 0 ||
			issue.labels.some((label) => selectedCategory.includes(label))

		return languageMatch && platformMatch && categoryMatch
	})
	$: hasFilter = selectedLanguages.length || selectedPlatforms.length || selectedCategory.length

	$: updateURL(selectedLanguages, selectedPlatforms, selectedCategory)

	const updateURL = (langs: string[], plats: string[], cats: string[]) => {
		const query = new URLSearchParams()

		if (langs.length) query.set('languages', langs.join('_'))
		if (plats.length) query.set('platforms', plats.join('_'))
		if (cats.length) query.set('category', cats.join('_'))
		if (browser) {
			goto(`?${query.toString()}`, { replaceState: true, keepFocus: true, noScroll: true })
		}
	}

	const gotoIssue = (issue: Issue) => {
		window.open(issue.repo + '/issues/' + issue.number, '_blank')
	}

	onMount(() => {
		const url = $page.url.searchParams

		const langs = url.get('languages')?.split('_').filter(Boolean) ?? []
		const plats = url.get('platforms')?.split('_').filter(Boolean) ?? []
		const cats = url.get('category')?.split('_').filter(Boolean) ?? []

		selectedLanguages = langs
		selectedPlatforms = plats
		selectedCategory = cats
	})
</script>

<Head title="Contribute" />

<div class="flex h-full w-full flex-col items-center bg-arkGray bg-opacity-95 px-5 xl:px-0">
	<div
		class="mt-10 flex w-full max-w-6xl flex-col justify-between rounded-md bg-arkGray2 px-4 py-6 text-white lg:flex-row"
	>
		<div>
			<p class="text-2xl">Research</p>
		</div>

		<div class="flex flex-row gap-3">
			<Cta text="View documentation" classes="!text-base lg:!text-xl" />

			<div class="flex items-center rounded-lg bg-white pr-2">
				<Cta
					on:hover={(e) => (hoverGithub = e.detail)}
					target="_blank"
					text="View Github"
					classes="px-2 !text-base lg:!text-xl"
					url={config.github}
				/>
				<Icon
					class={hoverGithub ? 'text-arkOrange' : 'text-black'}
					icon="pajamas:github"
					width="24px"
				/>
			</div>
		</div>
	</div>

	<div class="my-10 text-white">
		<Title title="Contribute" h3 />
	</div>

	<div class="mb-10 flex w-full max-w-6xl flex-col gap-5 text-white">
		<div class="grid grid-cols-2 flex-row gap-3 sm:flex">
			<Dropdown items={languages} bind:values={selectedLanguages} title="Language" zOrder={3} />
			<Dropdown items={platforms} bind:values={selectedPlatforms} title="Platforms" zOrder={2} />
			<Dropdown items={categories} bind:values={selectedCategory} title="Category" />
		</div>
		<table class="hidden table-fixed border-separate border-spacing-y-3 lg:table">
			<thead>
				<tr>
					<td class="">Titile</td>
					<td>Language</td>
					<td>Platforms</td>
					<td>Category</td>
				</tr>
			</thead>

			<tbody>
				{#if hasFilter && !filteredIssues.length}
					<tr>
						<td class="text-center" colspan="4"> No issues found </td>
					</tr>
				{:else}
					{#each hasFilter ? filteredIssues : generalIssues as issue}
						<tr class="" on:click={() => gotoIssue(issue)}>
							<td class="truncate lg:max-w-80 xl:max-w-[400px]">{issue.title}</td>
							<td class="">
								<Language {issue} />
							</td>
							<td>
								<Platform {issue} />
							</td>
							<td>
								<Category {issue} />
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
		<!-- For mobile view -->
		<div class="flex flex-col gap-4 lg:hidden">
			{#if hasFilter && !filteredIssues.length}
				<div class="text-center">No issues found</div>
			{:else}
				{#each hasFilter ? filteredIssues : generalIssues as issue}
					<ContributeRow {issue} />
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	thead tr td {
		@apply pl-5 text-lg font-semibold;
	}

	tbody tr {
		@apply cursor-pointer bg-arkDeep hover:bg-opacity-70;
	}

	tbody tr td {
		@apply p-4;
	}
</style>
