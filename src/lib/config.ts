export const config = {
	title: 'ARK Builders | Opensource apps and framework',
	author: 'ARK Builders',
	headerTitle: 'ARK Builders',
	description: 'Privacy-focused apps for every day, built on local-first serverless architecture.',
	language: 'en-us',
	theme: 'dark', // system, dark or light
	domain: 'https://www.ark-builders.dev/',
	siteUrl: 'https://www.ark-builders.dev',
	siteLogo: '/icon-512.png',
	// image: '/img/avatar.png',
	email: 'info@ark-builders.dev',
	github: 'https://github.com/ARK-Builders',
	twitter: 'https://x.com/ARKBuilders_DEV',
	linkedin: '',
	locale: 'en-US',
	primaryColor: '#06a261',
	newsletter: 'mailchimp',
	multiuser: true,
}

export const user = {
	name: 'ARK-Builders',
	twitter: '',
}

export const navLinks = [
	{ href: '/', title: 'Home', icon: 'mdi:home' },
	{ href: '/apps/', title: 'Apps', icon: '' },
	{ href: '/blog/', title: 'Blog', icon: 'grommet-icons:article' },
	{ href: '/framework/', title: 'Framework', icon: 'heroicons:cpu-chip' },
	{ href: '/contribute/', title: 'Contribute', icon: 'fluent:window-dev-tools-20-filled' },
	{ href: '#', title: 'Community', icon: 'fluent:people-community-28-filled' },
]

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630,
}

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false, // true or false
}
