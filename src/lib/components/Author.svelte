<script>
	import { base } from '$app/paths'
	import SocialIcon from '$lib/components/SocialIcon.svelte'
	import formatDate from '$utils/formatDate'
	import Icon from '@iconify/svelte'

	export let author = ''
	export let avatar = ''
	export let twitter = ''
	export let postDate = ''
</script>

{#if avatar}
	<img src={base + avatar} width="38px" height="38px" alt="avatar" class="h-10 w-10 rounded-lg" />
{:else}
	<Icon
		icon="mdi:account-circle"
		width="38px"
		height="38px"
		class="h-10 w-10 rounded-lg text-arkGray2"
	/>
{/if}

<dl class="whitespace-nowrap text-sm font-medium leading-5">
	<dt class="sr-only">Author</dt>
	<dd class="font-sebino text-xl leading-6 text-arkGray">{author}</dd>
	{#if twitter}
		<dt class="sr-only">Twitter</dt>
		<dd>
			<SocialIcon popup icon="twitter" url={twitter} small>
				{twitter?.replace('https://x.com/', '@')}
			</SocialIcon>
		</dd>
	{/if}
	{#if postDate}
		<dt class="sr-only">Published on</dt>
		<dd class="leading-6 text-arkGray">
			<time dateTime={postDate}>{formatDate(postDate)}</time>
		</dd>
	{/if}
</dl>
