// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
interface ImportMetaEnv {
	readonly FIREBASE_API_KEY: string
	readonly FIREBASE_AUTH_DOMAIN: string
	readonly FIREBASE_PROJECT_ID: string
	readonly FIREBASE_STORAGE_BUCKET: string
	readonly FIREBASE_MESSAGING_SENDER_ID: string
	readonly FIREBASE_APP_ID: string
	readonly FIREBASE_MEASUREMENT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
