// src/routes/blog/[slug]/+page.js
import { error } from '@sveltejs/kit';

//import type { Load } from '@sveltejs/kit';
import { pages, pageToFolder } from '$/pages/indexer';

export async function load({ params }: { params: { page: string } }) {
	const page = params.page;

	try {
		const post = await pages[pageToFolder[page]].pages[page](); // fix void to defined function type in indexer.ts
		const { title, date, summary } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			summary,
			date
		};
	} catch (e) {
		return error(404, 'Not found');
	}
}
