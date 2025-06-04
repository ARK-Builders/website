import slugify from 'slugify'
import { visit } from 'unist-util-visit'

export default function remarkExportToc() {
	return (tree, file) => {
		const toc = []

		visit(tree, 'heading', (node) => {
			const depth = node.depth
			const text = node.children
				.filter((child) => child.type === 'text' || child.type === 'inlineCode')
				.map((child) => child.value)
				.join('')
				.trim()

			if (text) {
				const slug = slugify(text, { lower: true, strict: true })
				toc.push({ title: text, href: `#${slug}`, depth })
			}
		})

		file.data.fm = file.data.fm || {}
		file.data.fm.toc = toc
	}
}
