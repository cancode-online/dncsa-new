<script lang='ts'>

    import { database } from '$/firebase';
	import { doc, getDocs, getDoc, collection } from 'firebase/firestore';
	import { onMount } from 'svelte';
    
    let isDataLoaded = false;
	const db = database();
	let userData: any[] = [];

    let users = [{
        status: 'Missing',
        first_name: "Adi",
        last_name: "K",
        gradeEarned: '45',
        gradeTotal: '61',

    },{
        status: 'Missing',
        first_name: "Adi",
        last_name: "K",
        gradeEarned: '45',
        gradeTotal: '61',

    },
    {
        status: 'Missing',
        first_name: "Adi",
        last_name: "K",
        gradeEarned: '45',
        gradeTotal: '61',

    },
    {
        status: 'Missing',
        first_name: "Adi",
        last_name: "K",
        gradeEarned: '45',
        gradeTotal: '61',

    }];

    let all_assignments = [
        {
            name: 'fibonacci',
        },
        {
            name: 'bst tree',
        },
        {
            name: 'array list',
        },
        {
            name: 'java code',
        },
        {
            name: 'runtime demo',
        },
        {
            name: 'project IDE',
        },
        {
            name: 'cancode',
        },
        {
            name: 'mort code',
        },
        {
            name: 'page-slug',
        }
    ]

	onMount(async () => {
		await fetchData();
		isDataLoaded = true;
	});

    function fetchData() {

    }

</script>

{#if isDataLoaded}
	<div class="overflow-x-auto w-full h-full">
		<table class="table w-full text-sm !rounded-none">
			<!-- head -->
			<thead class="font-bold !rounded-t-none">
				<tr class='!rounded-t-none'>
					<th class='!relative !rounded-t-none'>#</th>
					<th>Name</th>
                    <th>Grade</th>
					{#each all_assignments as assignment}
                        <th class='!rounded-t-none'>
                            {assignment.name}
                        </th>
                    {/each}
				</tr>
			</thead>
			<tbody>
				{#each users as user, i}
					<tr>
						<td class='bg-black bg-opacity-5'>
							{i}
						</td>

						<td class='bg-black bg-opacity-5'>
							{user.first_name} {user.last_name}
						</td>

                        <td class='bg-black bg-opacity-5'>
                            30 / 60
                        </td>

						{#each all_assignments as assignment, x}
                            <td class='bg-black {(x + i) % 2 === 0 ? 'bg-opacity-5' : 'bg-opacity-0'}'>
                                2.3/3
                            </td>
                        {/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}