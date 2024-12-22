import { YOUTUBE_API_KEY } from '$env/static/private'
import { error } from '@sveltejs/kit'

export async function fetchYoutubeVideos(channelId: string, maxResults: number = 10) {
	const API_KEY = YOUTUBE_API_KEY
	const baseUrl = 'https://www.googleapis.com/youtube/v3'

	try {
		if (!API_KEY || !channelId) throw error(400, 'No API KEY or Channel ID!')

		// First, get the upload playlist ID for the channel
		const channelResponse = await fetch(
			`${baseUrl}/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
		)
		const channelData = await channelResponse.json()

		if (!channelData.items?.[0]) {
			throw new Error('Channel not found')
		}

		const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

		// Then, get the videos from the uploads playlist
		const videosResponse = await fetch(
			`${baseUrl}/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
		)
		const videosData = await videosResponse.json()

		return videosData.items.map((item: any) => ({
			id: item.snippet.resourceId.videoId,
			title: item.snippet.title,
			description: item.snippet.description,
			thumbnail: item.snippet.thumbnails.medium.url,
			embedUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
		}))
	} catch (error) {
		console.error('Error fetching YouTube videos:', error)
		throw error
	}
}
