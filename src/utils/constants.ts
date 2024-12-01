import MemoLogo from '$lib/assets/images/app-logos/memo.svelte'
import RateLogo from '$lib/assets/images/app-logos/rate.svelte'
import RetouchLogo from '$lib/assets/images/app-logos/retouch.svelte'
import type { ComponentType } from 'svelte'

export const appList = [
	{
		name: 'Memo',
		description:
			'Navigator is a file browser that embraces tags as the novel method to locate your data. It effectively eliminates irrelevant system files, enabling you to find your documents or photos with ease through the use of tags.',
		logo: 'memo',
		url: '/memo',
		colors: ['#FFF5DD', '#FFD979'], // 1st lighter, 2nd deeper
	},
	{
		name: 'Rate',
		description:
			'Rate - the indispensable companion for travelers, enables swift conversions among multiple currencies and allows you to set exchange rate alerts for both fiat and crypto, ensuring no lucrative deal slips past you.',
		logo: 'rate',
		url: '/rate',
		colors: ['#E1D0F7', '#C39EF2'],
	},
	{
		name: 'Retouch',
		description:
			'Retouch is your powerful graphic assistant right in your pocket! This app is designed not only for photo editing but also for drawing, creating graphic notes with a stylus, and highlighting important information in screenshots.',
		logo: 'retouch',
		url: '/retouch',
		colors: ['#DBF5C8', '#9EE67D'],
	},
	{
		name: 'Navigator',
		description:
			'Navigator is a file browser that embraces tags as the novel method to locate your data. It effectively eliminates irrelevant system files, enabling you to find your documents or photos with ease through the use of tags.',
		logo: 'navigator',
		url: '',
		colors: ['#A5D6FF', '#60B1F4'],
	},
	{
		name: 'Shelf',
		description: '',
		logo: 'shelf',
		url: '',
		colors: ['#A5D6FF', '#60B1F4'],
	},
	{
		name: 'Gallery',
		description: '',
		logo: '',
		url: '',
		colors: ['#A5D6FF', '#60B1F4'],
	},
]

export const currentApps = appList.slice(0, 2)

export const communityList = [
	{
		name: 'Discord',
		logo: 'radix-icons:discord-logo',
		url: 'https://discord.gg/uRWJyYBr',
		colors: ['#FFF3E6', '#DD7409'], // 1st lighter, 2nd deeper
	},
	{
		name: 'Telegram',
		logo: 'iconoir:telegram',
		url: 'https://t.me/ark_builders',
		colors: ['#FFF3E6', '#DD7409'],
	},
	{
		name: 'Github',
		logo: 'iconoir:github',
		url: 'https://github.com/ARK-Builders',
		colors: ['#FFF3E6', '#DD7409'],
	},
	{
		name: 'X',
		logo: 'iconoir:twitter',
		url: 'https://x.com/ARKBuilders_DEV',
		colors: ['#FFF3E6', '#DD7409'],
	},
	{
		name: 'Instagram',
		logo: 'iconoir:instagram',
		url: 'https://www.instagram.com/ark.builders.design',
		colors: ['#FFF3E6', '#DD7409'],
	},
	{
		name: 'LinkedIn',
		logo: 'iconoir:linkedin',
		url: 'https://www.linkedin.com/company/ark-builders-dev/',
		colors: ['#FFF3E6', '#DD7409'],
	},
	{
		name: 'YouTube',
		logo: 'iconoir:youtube',
		url: 'https://www.youtube.com/@ARK-Builders-Dev',
		colors: ['#FFF3E6', '#DD7409'],
	},
	{
		name: 'Medium',
		logo: 'iconoir:medium',
		url: 'https://ark-builders.medium.com/',
		colors: ['#FFF3E6', '#DD7409'],
	},
]

export const BTC_ADDRESS = 'bc1qx8n9r4uwpgrhgnamt2uew53lmrxd8tuevp7lv5'
export const ETH_ADDRESS = '0x9765C5aC38175BFbd2dC7a840b63e50762B80a1b'

export type App = {
	title: string
	draft: string
	slug: string
	content: any
	date: string
	author?: string
	github?: string
	preview?: string[]
	android_download?: string
	ios_download?: string
}

export type Blog = {
	author: string
	authorId: string
	content: string
	date: string
	draft: boolean
	image: string
	next: any
	prev: any
	slug: string
	summary: string
	tag: any
	tags: string[]
	title: string
	youtube: any
	type: string
}

export type Author = {
	id: string
	name: string
	avatar?: string
	occupation?: string
	company?: string
	email?: string
	twitter?: string
	linkedin?: string
	github?: string
}
export interface Issue {
	title: string
	labels: string[]
	user: string
	user_avatar: string
	date: string
	repo: string
	number: number
	platforms: string[]
	languages: string[]
}

export const appLogos: Record<string, ComponentType> = {
	rate: RateLogo,
	memo: MemoLogo,
	retouch: RetouchLogo,
}
