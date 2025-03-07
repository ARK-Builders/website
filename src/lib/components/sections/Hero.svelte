<script lang="ts">
	import LeftImage from '$lib/assets/images/left.svelte'
	import MobLeftImage from '$lib/assets/images/mob-left.svelte'
	import MobRightImage from '$lib/assets/images/mob-right.svelte'
	import RightImage from '$lib/assets/images/right.svelte'
	import Cta from '$lib/components/elements/CTA.svelte'
	import { communityList } from '$utils/constants'
	import Icon from '@iconify/svelte'

	const contacts = communityList.filter((community) =>
		['Telegram', 'Discord', 'X'].includes(community.name)
	)

	let hoverGithub = false
</script>

<div class="mb-16 flex w-full flex-col">
	<div class="relative flex w-full flex-row items-center justify-between gap-1 py-10">
		<!-- BG Images -->
		<div class="h-full flex-1">
			<span class="relative hidden md:block md:h-[640px]">
				<LeftImage />
			</span>
			<span class="md:hidden">
				<MobLeftImage />
			</span>
		</div>

		<!-- Center part -->
		<div class="absolute flex w-full flex-col items-center justify-center sm:gap-10">
			<div class="flex max-w-2xl flex-col items-center gap-4 sm:w-1/2 sm:gap-10 lg:w-full">
				<div class="flex flex-col items-center gap-2 md:gap-5 md:leading-[78px]">
					<p class="text-center text-3xl md:text-[40px] lg:text-[66px]">Neat, efficient and</p>
					<p
						class="w-fit rounded-lg bg-arkOrange px-4 text-center text-2xl text-white md:text-4xl md:leading-[78px] lg:text-[62px]"
					>
						privacy-focused apps
					</p>
					<p class="text-center text-3xl md:text-[40px] lg:text-[66px]">for your productivity</p>
				</div>
				<p class="font-sebino max-w-[650px] px-5 text-center md:px-2 md:text-xl">
					ARK Builders crafts contemporary software for all platforms, with the mission to elevate
					daily user experiences through privacy enhancements and seamless cross-device
					synchronization.
				</p>
				<div class="flex items-center justify-center gap-2">
					<Cta url="/#apps" text="Get Started" bgBlack />
					<div class="flex items-center gap-0">
						<Cta
							on:hover={(e) => (hoverGithub = e.detail)}
							target="_blank"
							text="View Github"
							classes="underline pr-2"
							url="https://github.com/ARK-Builders"
						/>
						<Icon class={hoverGithub ? 'text-arkOrange' : ''} icon="ri:github-fill" width="24px" />
					</div>
				</div>

				<div
					class="flex w-fit flex-col gap-2 rounded-full bg-arkOrangeLight px-7 py-3 lg:px-10 lg:py-5"
				>
					<p class="font-sebino text-center text-xl">
						Be the first to know about our latest updates
					</p>

					<div class="flex flex-row justify-center gap-5">
						{#each contacts as community}
							<a
								aria-label={community.name}
								class="flex h-10 w-10 items-center justify-center rounded-full bg-arkOrangeLight2"
								href={community.url}
								target="_blank"
							>
								<Icon icon={community.logo} width="24px" color={community.colors[1]} />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<!-- BG Images -->
		<div class="flex h-full flex-1 justify-end overflow-hidden">
			<span class="relative hidden h-[640px] md:block">
				<RightImage />
			</span>
			<span class=" md:hidden">
				<MobRightImage />
			</span>
		</div>
	</div>
</div>
