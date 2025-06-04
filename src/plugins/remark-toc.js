import GithubSlugger from 'github-slugger'
import { visit } from 'unist-util-visit'

export default function remarkExportToc() {
	return (tree, file) => {
		const toc = []
		const slugger = new GithubSlugger()

		visit(tree, 'heading', (node) => {
			const depth = node.depth
			const text = node.children
				.filter((child) => child.type === 'text' || child.type === 'inlineCode')
				.map((child) => child.value)
				.join('')
				.trim()

			if (text) {
				const slug = slugger.slug(text)
				toc.push({ title: text, href: `#${slug}`, depth })
			}
		})

		file.data.fm = file.data.fm || {}
		file.data.fm.toc = toc
	}
}
