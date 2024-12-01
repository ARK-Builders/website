<script lang="ts">
	import { slug } from 'github-slugger'

	export let text = ''
	export let size = 'text-sm'
	// export let url = slug(text)
</script>

<p
	class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 font-medium uppercase {size}"
>
	{text}
</p>
