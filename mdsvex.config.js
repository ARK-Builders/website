import relativeImages from 'mdsvex-relative-images'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import rehypePlugins from './src/plugins/rehype/index.js'
import remarkExportToc from './src/plugins/remark-toc.js'

export default {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool',
	},
	remarkPlugins: [remarkExportToc, relativeImages],
	rehypePlugins: [
		[rehypeSlug, rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		...Object.values(rehypePlugins),
	],
}
