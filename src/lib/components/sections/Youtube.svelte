<script lang="ts">
	import Icon from '@iconify/svelte'
	import VideoItem from '$lib/components/elements/VideoItem.svelte'

	const videoLinks = [
		{
			url: 'https://www.youtube.com/embed/loKbP5wZpYI?si=e_MN9QpFqhjuE4S6',
			title: 'Publishing a Web App with Fission CLI: Step-by-Step Demo',
		},
		{
			url: 'https://www.youtube.com/embed/j1E9NWUNGfk?si=eczMSAZFvmeWiOC3',
			title: 'Develop Android UI from Scratch | ARK Drop - #1 Development Preparation',
		},
		{
			url: 'https://www.youtube.com/embed/coRL96N19fg?si=iugehynqZGAvpEY1',
			title: 'How to Do a UI/UX Quick Sketch | Memo app - #2 Sketch & Wireframing',
		},
		{
			url: 'https://www.youtube.com/embed/jrmw2KEu27o?si=ZxuJnrnhrgQizvfs',
			title: '*LIVE Footage* of Arranging Design Feedback Meeting | Memo App - #4 Design Review',
		},
	]
</script>

<section class="relative flex items-center pb-16 lg:px-5 xl:px-0">
	<div class="mx-auto flex w-full max-w-7xl flex-col gap-5 rounded-xl bg-[#FC0D1B]/20 p-5">
		<div class="flex flex-row items-center justify-between">
			<a
				target="_blank"
				href="https://www.youtube.com/@ARK-Builders-Dev"
				class="flex flex-col items-start gap-2 sm:flex-row sm:items-center"
			>
				<Icon icon="ri:youtube-fill" width="44px" class="hidden sm:block" color="#FC0D1B" />
				<Icon icon="ri:youtube-fill" width="34px" class="sm:hidden" color="#FC0D1B" />
				<p class="text-lg font-bold lg:text-3xl">Check out our latest videos</p>
			</a>

			<a
				target="_blank"
				class="text-bold flex items-center gap-1 rounded-lg bg-white px-2 py-1 text-xs text-gray-600 hover:text-[#FC0D1B] lg:text-base"
				href="https://www.youtube.com/@ARK-Builders-Dev"
			>
				<Icon icon="line-md:youtube-filled" width="20px" color="#FC0D1B" />
				View on YouTube
			</a>
		</div>
		<div class="grid h-48 grid-cols-1 gap-4 overflow-x-auto md:grid-cols-2 lg:grid-cols-4">
			{#each videoLinks as video}
				<VideoItem url={video} />
			{/each}
		</div>
	</div>
</section>
