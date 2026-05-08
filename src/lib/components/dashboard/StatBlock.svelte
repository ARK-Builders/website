<script lang="ts">
	export type StatMetric = {
		label: string
		value: string
	}

	export let title: string
	export let subtitle: string | undefined = undefined
	export let metrics: StatMetric[] = []
</script>

<article class="flex h-full flex-col rounded-xl border border-white/10 bg-arkGray2/80 p-5">
	<div class="mb-4 flex items-start justify-between gap-3">
		<div class="flex flex-col">
			<h3 class="font-sebino text-xl text-white">{title}</h3>
			{#if subtitle}
				<span class="text-xs uppercase tracking-wide text-arkGray4">{subtitle}</span>
			{/if}
		</div>
	</div>

	<div class="space-y-3">
		{#each metrics as metric}
			<div class="rounded-md border border-white/5 bg-arkGray/60 p-3">
				<p class="text-xs uppercase tracking-wide text-arkGray4">{metric.label}</p>
				<p class="mt-1 text-lg font-semibold text-arkOrangeLight">{metric.value}</p>
			</div>
		{/each}
	</div>
</article>
