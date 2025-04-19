<script lang="ts">
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

	type Tab = 'typical' | 'ark'

	let activeType: Tab = 'typical'
	let intervalId: number | undefined = undefined

	onMount(() => {
		intervalId = setInterval(() => {
			activeType = activeType == 'typical' ? 'ark' : 'typical'
		}, 5000)

		return () => {
			clearInterval(intervalId)
		}
	})

	const setActiveType = (type: Tab) => {
		activeType = type
		clearInterval(intervalId)
	}
</script>

<section class="relative flex items-center bg-arkGray py-12">
	<div
		class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 lg:gap-10 lg:px-4 xl:px-0"
	>
		<div class="flex w-full flex-col gap-4">
			<p class="text-center text-4xl font-bold text-white lg:text-6xl">Process</p>
		</div>

		<div class="flex w-full flex-col items-center justify-center gap-7">
			<div
				class="flex h-11 w-fit flex-row items-center justify-between overflow-hidden rounded-full bg-arkOrange bg-opacity-40 text-lg font-semibold text-white lg:h-12 lg:text-2xl"
			>
				<button
					on:click={() => setActiveType('ark')}
					class:bg-arkOrange={activeType == 'ark'}
					class:text-arkGray4={activeType != 'ark'}
					class="flex h-full items-center justify-center rounded-full px-6"
				>
					ARK-based app
				</button>
				<button
					on:click={() => setActiveType('typical')}
					class:bg-arkOrange={activeType == 'typical'}
					class:text-arkGray4={activeType != 'typical'}
					class="flex h-full items-center justify-center rounded-full px-5"
				>
					Typical app
				</button>
			</div>

			<div class="flex w-full flex-col justify-center gap-16 lg:flex-row">
				<div class="flex justify-center transition-all lg:w-2/4">
					<img
						class="h-fit max-h-[680px] {activeType == 'ark' && 'ml-9'} 
						{activeType == 'typical' &&
							'-mt-[30px] scale-x-[91%] scale-y-[91%] pr-5 sm:mt-0 sm:!scale-100 sm:pr-6'}"
						src="{base}/images/process/{activeType}-left.png"
						alt="ARK process"
					/>
				</div>

				<!-- Right Column -->
				<div class="flex flex-col items-center text-white lg:h-[750px] lg:w-2/4 lg:items-start">
					<!-- ARK App -->
					<p class="text-center text-2xl font-semibold md:text-[32px] lg:text-start">
						Resources needed
					</p>
					{#if activeType == 'ark'}
						<div class="flex flex-col items-center gap-3 transition-all">
							<img
								class="-ml-4 max-h-[720px]"
								src="{base}/images/process/{activeType}-right.png"
								alt="ARK process"
							/>
						</div>
					{/if}

					<!-- Typical App -->
					{#if activeType == 'typical'}
						<div class="mt-[11px] flex h-[600px] flex-col gap-5 md:h-[690px]">
							<img
								class="h-fit w-[350px] md:w-[380px] xl:w-[480px]"
								src="{base}/images/process/typical-right.png"
								alt="Typical process"
							/>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
