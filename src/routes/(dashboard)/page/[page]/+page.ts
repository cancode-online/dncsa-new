// src/routes/blog/[slug]/+page.js
import { error } from '@sveltejs/kit';

//import type { Load } from '@sveltejs/kit';
import { pages } from '$/pages/indexed.js';
console.log(pages);

export async function load({ params }: { params: { page: string } }) {

	try {
		const post = await pages[params.page]();
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
