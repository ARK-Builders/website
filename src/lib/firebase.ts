import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { getAnalytics, type Analytics } from 'firebase/analytics'

function getFirebaseOptions(): FirebaseOptions | undefined {
	const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
	const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
	const appId = import.meta.env.VITE_FIREBASE_APP_ID

	if (!apiKey?.trim() || !projectId?.trim() || !appId?.trim()) {
		return undefined
	}

	return {
		apiKey,
		authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
		projectId,
		storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
		appId,
		measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
	}
}

const options = getFirebaseOptions()

export const firebaseApp: FirebaseApp | undefined =
	options === undefined ? undefined : getApps().length > 0 ? getApp() : initializeApp(options)

/**
 * Firebase Analytics (GA4). Only defined in the browser when the app is configured with valid env vars.
 */
export const analytics: Analytics | undefined =
	typeof window !== 'undefined' && firebaseApp !== undefined ? getAnalytics(firebaseApp) : undefined
