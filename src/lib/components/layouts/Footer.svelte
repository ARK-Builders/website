<script lang="ts">
	import { base } from '$app/paths'
	import FooterLogo from '$lib/assets/images/footer-logo.svelte'
	import { communityList } from '$utils/constants'
	import Icon from '@iconify/svelte'
</script>

<footer class="bg-white px-5 pb-10 pt-40 xl:px-0">
	<div class="mx-auto flex w-full max-w-7xl flex-row gap-10">
		<div class="flex flex-1 flex-col gap-5">
			<div class="h-10 w-fit">
				<FooterLogo />
			</div>
			<div class="grid w-fit grid-cols-4 flex-row gap-3 lg:flex">
				{#each communityList as community}
					<a
						aria-label={community.name}
						target="_blank"
						href={community.url}
						class="flex h-10 w-fit cursor-pointer flex-row items-center gap-4 hover:text-arkOrange"
					>
						<div
							class="flex h-full w-10 items-center justify-center rounded-full"
							style="background-color: {community.colors[0]}"
						>
							<Icon icon={community.logo} color={community.colors[1]} width="24px" />
						</div>
					</a>
				{/each}
			</div>
		</div>
		<div class="font-sebino flex w-full flex-1 auto-rows-auto grid-cols-3 flex-col gap-3 lg:grid">
			<div>
				<a href="{base}/apps" class="footer-menu pb-2">Apps</a>
				<table class="text-xl text-arkGray4">
					<tr>
						<td>
							<a href="{base}/apps/memo" class="hover:text-black"> Memo </a>
						</td>
					</tr>
					<tr>
						<td>
							<a href="{base}/apps/rate" class="hover:text-black"> Rate </a>
						</td>
						<!-- <td class="pr-10"> Navigator </td> -->
					</tr>
					<tr>
						<!-- <td>
							<a href="{base}/apps/retouch" class="hover:text-black"> Retouch </a>
						</td> -->
						<!-- <td> Shelf </td>
						<td> Gallery </td> -->
					</tr>
				</table>
			</div>
			<div class="flex flex-col gap-1 text-arkGray3">
				<a href="{base}/contribute" class="footer-menu">Contribute</a>
				<a href="{base}/framework" class="footer-menu">Framework</a>
			</div>
			<div>
				<a href="{base}/blog" class="footer-menu">Blog</a>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	tr td {
		@apply py-1;
	}

	.footer-menu {
		@apply text-xl text-arkGray3 hover:underline;
	}
</style>
