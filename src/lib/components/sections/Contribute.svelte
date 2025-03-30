<script lang="ts">
	import Cta from '$lib/components/elements/CTA.svelte'
	import ContributeCard from '$lib/components/elements/ContributeCard.svelte'
	import Label from '$lib/components/elements/Label.svelte'
	import Tag from '$lib/components/elements/TechTag.svelte'
	import Android from '$lib/icons/android.svelte'
	import Icon from '@iconify/svelte'

	const contributions = [
		{
			title: 'Automatically extract Domain tags',
			tags: [{ icon: 'mdi:language-kotlin', name: 'Kotlin' }],
			labels: [{ name: 'Feature', background: '#56DD9E' }],
			issueLink: 'https://github.com/ARK-Builders/ARK-Shelf/issues/3',
		},
		{
			title: 'Replace alphabetical sorting by un-sorting',
			tags: [
				{ icon: 'ri:svelte-line', name: 'Svelte' },
				{ icon: 'teenyicons:rust-outline', name: 'Rust' },
				{ icon: 'teenyicons:typescript-outline', name: 'TypeScript' },
			],
			labels: [
				{ name: 'Enhancement', background: '#DAD67B' },
				{ name: 'Windows', icon: 'devicon:windows8' },
				{ name: 'Linux', icon: 'flat-color-icons:linux' },
				{ name: 'macOS', icon: 'uil:apple' },
			],
			issueLink: 'https://github.com/ARK-Builders/ARK-Shelf-Desktop/issues/20',
		},
		{
			title: 'Move resources with their associated data',
			tags: [{ icon: 'mdi:language-kotlin', name: 'Kotlin' }],
			labels: [{ name: 'Enhancement', background: '#DAD67B' }],
			issueLink: 'https://github.com/ARK-Builders/ARK-Navigator/issues/380',
		},
		{
			title: 'Empty previews are generated',
			tags: [
				{ icon: 'teenyicons:rust-outline', name: 'Rust' },
				{ icon: 'mdi:language-kotlin', name: 'Kotlin' },
			],
			labels: [{ name: 'Enhancement', background: '#DAD67B' }],
			issueLink: 'https://github.com/ARK-Builders/ark-android/issues/62',
		},
	]
</script>

<section class="relative flex items-center bg-arkGray py-24 lg:px-5 xl:px-0">
	<div
		class="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 lg:flex-row lg:items-start lg:px-0"
	>
		<div class="flex flex-col gap-4 md:w-2/3">
			<p class="text-center text-xl font-semibold uppercase text-arkOrange lg:text-start">
				Contribute
			</p>
			<p class="text-center text-[40px] font-bold leading-snug text-white lg:text-start">
				Join our journey and become a hero in the open-source universe!
			</p>
			<div class="font-sebino flex w-full flex-col justify-center lg:justify-start">
				<p class="text-center text-white lg:max-w-[90%] lg:text-start">
					Imagine being part of a passionate community where your efforts directly contribute to
					innovations that touch lives around the globe. By joining us, you're not just contributing
					-- you're shaping the future.
				</p>
				<!-- <ul class="my-5 text-white">
					<li>
						- <b>Learn and Grow</b>: Dive into new technologies, sharpen your skills, and grow with
						a community of like-minded individuals.
					</li>
					<li>
						- <b>Make an Impact</b>: Your contributions will improve software quality and introduce
						new features, making technology accessible and useful for everyone, for free!
					</li>
					<li>
						- <b>Recognition</b>: Get recognized for your work in a project that could be used by
						millions, enhancing your portfolio and opening new career opportunities.
					</li>
					<li>
						- <b>Drive Change</b>: Be at the forefront of technological evolution, addressing
						real-world challenges and making the world a better place, one commit at a time.
					</li>
				</ul> -->
				<p class="hidden text-white lg:block lg:max-w-[90%]">
					Whether you're a developer, a QA engineer, a technical writer, or simply someone with a
					keen interest and readiness to learn, your contribution can spark a revolution!
				</p>
			</div>
			<Cta url="/contribute" text="View More" classes="hidden lg:flex mt-5" />
		</div>
		<div class="flex w-full flex-col gap-3 md:grid md:grid-cols-2">
			{#each contributions as contribution}
				<ContributeCard issueLink={contribution.issueLink} title={contribution.title}>
					<div slot="title-tag" class="flex flex-row flex-wrap gap-2">
						{#each contribution.tags as tag}
							<Tag>
								<Icon icon={tag.icon} />
								{tag.name}
							</Tag>
						{/each}
					</div>
					<div class="flex flex-row items-center gap-2" slot="labels">
						{#each contribution.labels as label}
							{#if label.icon}
								<Icon icon={label.icon} width="22px" />
							{:else}
								<Label name={label.name} --background={label.background}></Label>
							{/if}
						{/each}
						{#if !contribution.title.includes('Replace')}
							<Android />
						{/if}
					</div>
				</ContributeCard>
			{/each}
		</div>
		<p class="text-center text-white lg:hidden">
			Whether you're a developer, a QA engineer, a technical writer, or simply someone with a keen
			interest and readiness to learn, your contribution can spark a revolution!
		</p>
		<Cta url="/contribute" text="View More" classes="lg:hidden mt-5" />
	</div>
</section>
