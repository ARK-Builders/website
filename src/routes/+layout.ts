export const prerender = true
export const ssr = true

export const load = async ({ url: { pathname } }) => {
	return { pathname }
}
