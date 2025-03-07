<script lang="ts">
	import { base } from '$app/paths'
	import BitcoinImage from '$lib/assets/images/support/bitcoin.svelte'
	import BuyMeACoffeeImage from '$lib/assets/images/support/buycoffee.png'
	import EthereumImage from '$lib/assets/images/support/ethereum.svelte'
	import PatreonImage from '$lib/assets/images/support/patreon.png'
	import SupportImage from '$lib/assets/images/support/support.svelte'
	import Modal from '$lib/components/elements/Modal.svelte'
	import { BTC_ADDRESS, ETH_ADDRESS } from '$utils/constants'
	import Icon from '@iconify/svelte'
	import QR from '@svelte-put/qr/img/QR.svelte'
	import type { SvelteComponent } from 'svelte'

	const supportImages: Record<string, string> = {
		buycoffee: BuyMeACoffeeImage,
		patreon: PatreonImage,
	}

	const supportImagesCrypto: Record<string, typeof SvelteComponent> = {
		bitcoin: BitcoinImage,
		ethereum: EthereumImage,
	}

	let modalData = {
		show: false,
		type: '',
		address: '',
	}
	let copied = false
	let timeout: ReturnType<typeof setTimeout> | null = null

	const supportLogosCrypto = [
		{
			name: 'bitcoin',
			onClick: () => {
				modalData.show = true
				modalData.type = 'Bitcoin'
				modalData.address = BTC_ADDRESS
			},
		},
		{
			name: 'ethereum',
			onClick: () => {
				modalData.show = true
				modalData.type = 'Ethereum'
				modalData.address = ETH_ADDRESS
			},
		},
	]

	const supportLogos = [
		{ name: 'buycoffee', url: 'https://buymeacoffee.com/arkbuilders' },
		{ name: 'patreon', url: 'https://www.patreon.com/ARKBuilders' },
	]

	const copyAddress = (value: string) => {
		navigator.clipboard.writeText(value)
		copied = true

		if (timeout) clearTimeout(timeout)
		timeout = setTimeout(() => (copied = false), 3000)
	}
</script>

<section class="relative flex items-center bg-arkOrangeLight py-14 lg:px-5 xl:px-0">
	<div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 lg:items-start">
		<div class="flex flex-col gap-3 px-10 md:px-0">
			<p class="text-center text-xl font-semibold uppercase text-arkOrange lg:text-start">
				Support us
			</p>
			<p class="text-center text-[40px] font-bold lg:z-10 lg:text-start">
				We greatly appreciate every bit of support!
			</p>
			<div class="flex w-full justify-center lg:justify-start">
				<p class="font-sebino text-center md:max-w-[70%] lg:text-start">
					We're passionate about making everyone's day-to-day life better through our open source
					apps. We've poured hundreds of hours into creating them, and while they're not perfect and
					we've got lots more we want to do, your support means everything. It's the fuel that keeps
					us going!
				</p>
			</div>
		</div>
		<div class="my-5 grid grid-cols-2 gap-2 md:flex md:h-[40px] md:flex-row">
			{#each supportLogosCrypto as logo}
				<button
					aria-label={logo.name}
					class="h-11 w-[150px] overflow-hidden rounded-md"
					on:click={(e) => {
						if (['bitcoin', 'ethereum'].includes(logo.name)) e.preventDefault()
						logo.onClick ? logo.onClick() : ''
					}}
				>
					<svelte:component this={supportImagesCrypto[logo.name]} class="w-full" />
				</button>
			{/each}
			{#each supportLogos as logo}
				<a
					class="h-11 w-[150px] overflow-hidden rounded-md md:w-[120px]"
					href={logo.url || base + '/'}
					target="_blank"
				>
					<img class="h-full w-full" src={supportImages[logo.name]} alt="support logo" />
				</a>
			{/each}
		</div>
	</div>
	<span class="absolute right-0 z-0 hidden lg:flex">
		<svelte:component this={SupportImage} />
	</span>
</section>

<Modal bind:show={modalData.show}>
	<div class="flex flex-col items-center gap-2">
		<div class="flex w-full flex-col items-center gap-3">
			<p class="text-xl font-bold">Donate using {modalData.type}</p>
			<QR
				data={modalData.address}
				backgroundFill="white"
				moduleFill="#DD7409"
				anchorInnerFill="#DD7409"
				anchorOuterFill="#C96000"
				width="400"
				height="400"
			/>
			<div class="flex h-10 w-full flex-row">
				<input class="w-full border px-2" value={modalData.address} disabled readonly />
				<button
					disabled={copied}
					class="border px-2"
					on:click={() => copyAddress(modalData.address)}
				>
					<Icon icon={copied ? 'tabler:copy-check-filled' : 'lucide:copy'} width="18px" />
				</button>
			</div>

			<p class="mt-6 px-5 text-center text-sm">
				Send us the transaction id by email support@ark-builders.dev to receive premium support. We
				will make our best to help you with any issue you encounter while using our Software.
			</p>
		</div>
	</div>
</Modal>
