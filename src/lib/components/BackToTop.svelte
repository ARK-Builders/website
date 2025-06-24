<script lang="ts">
	import Icon from '@iconify/svelte'
	import { onMount } from 'svelte'

	export let showOnPx = 250

	let hidden = true
	let passed = false
	let summaryElement: HTMLElement | null

	function scrollContainer() {
		return document.documentElement || document.body
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false
		} else {
			hidden = true
		}
	}

	const checkIfPassed = () => {
		summaryElement = document.getElementById('summary-of-issues')
		if (summaryElement) {
			const rect = summaryElement.getBoundingClientRect()
			passed = rect.top <= 0
		}
	}

	onMount(() => {
		window.addEventListener('scroll', checkIfPassed)
		checkIfPassed()

		return () => {
			window.removeEventListener('scroll', checkIfPassed)
		}
	})
</script>

<svelte:window on:scroll={handleOnScroll} />

<button
	on:click={() => {
		if (passed && summaryElement) {
			summaryElement.scrollIntoView({
				behavior: 'smooth',
			})
		} else {
			window.scrollTo({
				behavior: 'smooth',
				top: 0,
			})
		}
	}}
	class="opacity-1 hidden:opacity-0 fixed bottom-10 right-10 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 p-2"
	class:hidden
>
	<Icon
		icon="gg:arrow-up-o"
		width="38px"
		height="38px"
		class="h-10 w-10 rounded-lg text-arkGray2"
	/>
</button>
