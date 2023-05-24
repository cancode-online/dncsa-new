<script lang="ts">
	import { getPages } from '$utils/pages';
	import { onMount } from 'svelte';

	export let webpage = '';
	let metadata = {};
	export async function loadMetadata(webpage) {
		try {
			const _pages = await getPages();
			console.log('_pages:', _pages);
			const post = await _pages[webpage].import();
			console.log('webpage:' + webpage);
			console.log('post:', post);
			const { title, date, summary, type, due_start, due_end, grade_total } = post.metadata;
			const content = post.default;

			metadata = {
				content,
				title,
				summary,
				date,
				type,
				due_start,
				due_end,
				grade_total
			};
			console.log('metadata:' + metadata);
		} catch (e) {
			console.log(e);
			metadata = {
				status: 404,
				error: 'Not found'
			};
		}

		return metadata;
	}

	onMount(async () => {
		const metadata = await loadMetadata(webpage);
		console.log('metadata:' + metadata);
	});
</script>

<div class="overflow-x-auto w-full h-full">
	<table class="table table-zebra w-full text-sm !rounded-none">
		<!-- head -->
		<thead class="font-bold">
			<tr>
				<th>Title</th>
				<th>Type</th>
				<th>Due Start</th>
				<th>Due End</th>
				<th>Grade Total</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{metadata.title}</td>
				<td>{metadata.type}</td>
				<td>{metadata.due_start}</td>
				<td>{metadata.due_end}</td>
				<td>{metadata.grade_total}</td>
			</tr>
		</tbody>
	</table>
</div>
