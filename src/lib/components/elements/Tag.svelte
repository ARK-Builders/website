<script lang="ts">
	import { base } from '$app/paths'
	import { slug } from 'github-slugger'

	export let text
	export let classes = ''

	let url = slug(text)
</script>

<a
	href={base + '/tags/' + url}
	class="font-sebino rounded-md border bg-arkGray7 px-1 text-sm hover:bg-arkGray5 {classes}"
>
	{text}
</a>
