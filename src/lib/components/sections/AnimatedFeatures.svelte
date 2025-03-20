<script lang="ts">
	import { browser } from '$app/environment'
	import { base } from '$app/paths'
	import LottieAnimation from '$lib/components/elements/LottieAnimation.svelte'
	import ScrollContainer from '$lib/components/elements/ScrollContainer.svelte'

	const slides = [
		{
			title: 'Connect all your devices using P2P technology',
			text: 'Peer-to-peer (P2P) technology offers a robust and decentralized method for keeping private user data synchronized across multiple devices securely. Unlike traditional client-server architectures, where a central server is a potential single point of failure and a target for data breaches, P2P networks distribute data directly across user devices, significantly enhancing data security and resilience.',
			color: '#ACD6FC',
			animation: 'feature-1',
		},
		// {
		// 	title: 'Connect all your devices using P2P technology 2',
		// 	text: '',
		// 	color: '#DBF5C8',
		// 	animation: 'feature-2'
		// }
		// {
		// 	text: 'Connect all your devices using P2P technology 3',
		// 	color: '#E1D0F7',
		// 	animation: 'feature-3'
		// },
		// {
		// 	text: 'Connect all your devices using P2P technology 4',
		// 	color: '#FFEDC3',
		// 	animation: 'feature-4'
		// }
	]
</script>

<div class="mx-auto flex w-full max-w-7xl flex-row sm:px-8 lg:px-5 xl:px-0">
	{#if browser}
		<ScrollContainer>
			{#each slides as { color, title, text, animation }, i}
				<div
					class="flex w-full snap-center flex-col justify-between rounded-xl lg:flex-row"
					style="background-color: {color}"
				>
					<div class="flex flex-col gap-1 pt-5">
						<p class="mt-5 pl-5 text-center text-3xl font-medium lg:text-start">
							{title}
						</p>
						<p class="mt-5 hidden pl-5 text-center text-xl leading-normal lg:flex lg:text-start">
							{text ?? ''}
						</p>
					</div>
					<div class="flex justify-center">
						<LottieAnimation
							height="380px"
							width="540px"
							src={`${base}/videos/${animation}.json`}
						/>
					</div>
				</div>
			{/each}
		</ScrollContainer>
	{/if}
</div>
