<script lang="ts">
	import StatBlock, { type StatMetric } from '$lib/components/dashboard/StatBlock.svelte'
	import Head from '$lib/components/layouts/Head.svelte'

	type DashboardBlock = {
		title: string
		subtitle?: string
		metrics: StatMetric[]
	}

	type DashboardSection = {
		title: string
		blocks: DashboardBlock[]
	}

	type DashboardData = {
		rate: DashboardSection
		aggregated: DashboardSection
	}

	const dashboardData: DashboardData = {
		rate: {
			title: 'Rate Application Statistics',
			blocks: [
				{
					title: 'iOS',
					metrics: [
						{ label: 'Total Downloads', value: '412,380' },
						{ label: 'Active Users', value: '86,940' },
						{ label: 'Total Minutes', value: '1,923,410' },
						{ label: 'Paid Users (now)', value: '11,204' },
						{ label: 'Paid At Least Once', value: '28,793' },
					],
				},
				{
					title: 'Android',
					metrics: [
						{ label: 'Total Downloads', value: '367,155' },
						{ label: 'Active Users', value: '74,281' },
						{ label: 'Total Minutes', value: '1,641,590' },
						{ label: 'Paid Users (now)', value: '9,810' },
						{ label: 'Paid At Least Once', value: '23,604' },
					],
				},
				{
					title: 'ASO iOS',
					metrics: [
						{ label: 'Visits (last 7 days)', value: '58,420' },
						{ label: 'CR / Conversion Rate (last 1 day)', value: '7.2%' },
						{ label: 'CTR (last month)', value: '4.9%' },
					],
				},
				{
					title: 'ASO Android',
					metrics: [
						{ label: 'Visits (last 7 days)', value: '49,870' },
						{ label: 'CR / Conversion Rate (last 1 day)', value: '6.4%' },
						{ label: 'CTR (last month)', value: '4.3%' },
					],
				},
				{
					title: 'SEO',
					metrics: [
						{ label: 'Visits', value: '92,310' },
						{ label: 'Clicks', value: '37,506' },
					],
				},
			],
		},
		aggregated: {
			title: 'Aggregated Statistics',
			blocks: [
				{
					title: 'iOS',
					subtitle: 'Across all apps',
					metrics: [
						{ label: 'Total Downloads', value: '1,234,760' },
						{ label: 'Active Users', value: '274,901' },
						{ label: 'Total Minutes', value: '6,795,240' },
						{ label: 'Paid Users (now)', value: '35,742' },
						{ label: 'Paid At Least Once', value: '93,410' },
					],
				},
				{
					title: 'Android',
					subtitle: 'Across all apps',
					metrics: [
						{ label: 'Total Downloads', value: '1,081,520' },
						{ label: 'Active Users', value: '229,770' },
						{ label: 'Total Minutes', value: '5,902,315' },
						{ label: 'Paid Users (now)', value: '31,204' },
						{ label: 'Paid At Least Once', value: '79,028' },
					],
				},
				{
					title: 'ASO iOS',
					subtitle: 'Across all apps',
					metrics: [
						{ label: 'Visits (last 7 days)', value: '161,950' },
						{ label: 'CR / Conversion Rate (last 1 day)', value: '8.1%' },
						{ label: 'CTR (last month)', value: '5.5%' },
					],
				},
				{
					title: 'ASO Android',
					subtitle: 'Across all apps',
					metrics: [
						{ label: 'Visits (last 7 days)', value: '148,220' },
						{ label: 'CR / Conversion Rate (last 1 day)', value: '7.6%' },
						{ label: 'CTR (last month)', value: '5.1%' },
					],
				},
				{
					title: 'SEO',
					subtitle: 'Across all apps',
					metrics: [
						{ label: 'Visits', value: '310,840' },
						{ label: 'Clicks', value: '129,415' },
					],
				},
			],
		},
	}
</script>

<Head title="Analytics Dashboard" />

<div class="min-h-full bg-arkGray px-5 py-10 text-arkGray7 xl:px-0">
	<div class="mx-auto flex w-full max-w-7xl flex-col gap-10">
		<div class="flex flex-col gap-2">
			<p class="font-sebino text-sm uppercase tracking-[0.2em] text-arkOrange2">Internal</p>
			<h1 class="font-sebino text-3xl text-white md:text-4xl">Analytics Dashboard</h1>
			<p class="max-w-2xl text-sm text-arkGray4">
				Private overview with mocked values for product, ASO, and SEO performance.
			</p>
		</div>

		{#each Object.values(dashboardData) as section}
			<section class="flex flex-col gap-5">
				<div class="flex items-end justify-between">
					<h2 class="font-sebino text-2xl text-white">{section.title}</h2>
				</div>

				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
					{#each section.blocks as block}
						<StatBlock title={block.title} subtitle={block.subtitle} metrics={block.metrics} />
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
