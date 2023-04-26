import { getPages } from '$utils/pages';

export async function load({ params }: { params: { page: string } }) {
	const _pages = await getPages();
	const page = params.page;

	try {
		const post = await _pages[page].import();
		const { title, date, summary } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			summary,
			date
		};
	} catch (e) {
		return {
			status: 404,
			error: 'Not found'
		};
	}
}
