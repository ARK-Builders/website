import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { getAnalytics, type Analytics } from 'firebase/analytics'

const VITE_FIREBASE_API_KEY="AIzaSyAQbdcGq2XnuJ7A6rJviiU0fulXy65VKfg"
const VITE_FIREBASE_AUTH_DOMAIN="ark-builders-5d3b8.firebaseapp.com"
const VITE_FIREBASE_PROJECT_ID="ark-builders-5d3b8"
const VITE_FIREBASE_STORAGE_BUCKET="ark-builders-5d3b8.firebasestorage.app"
const VITE_FIREBASE_MESSAGING_SENDER_ID="208663092426"
const VITE_FIREBASE_APP_ID="1:208663092426:web:e9684b4bbb2afd71d42833"
const VITE_FIREBASE_MEASUREMENT_ID="G-XYQE5398NB"

function getFirebaseOptions(): FirebaseOptions | undefined {
	const apiKey = VITE_FIREBASE_API_KEY
	const projectId = VITE_FIREBASE_PROJECT_ID
	const appId = VITE_FIREBASE_APP_ID

	if (!apiKey?.trim() || !projectId?.trim() || !appId?.trim()) {
		return undefined
	}

	return {
		apiKey,
		authDomain: VITE_FIREBASE_AUTH_DOMAIN,
		projectId,
		storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
		appId,
		measurementId: VITE_FIREBASE_MEASUREMENT_ID,
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
