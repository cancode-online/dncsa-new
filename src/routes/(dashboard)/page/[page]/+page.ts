// src/routes/blog/[slug]/+page.js
import { error } from '@sveltejs/kit';

//import type { Load } from '@sveltejs/kit';
export async function load({ params }: { params: { page: string } }) {
	//${params.page}
	try {
		const post = await import(`../../../../pages/1.md`);
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
