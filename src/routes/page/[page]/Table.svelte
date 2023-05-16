<script lang='ts'>

    export let webpage = '';

    let webpage_metadata = {
      due_start: '2021-10-10',
      due_end: '2021-10-10',
      grade_total: 1,
    };

    let table_data = [
      {
        first_name: 'Cy',
        last_name: 'Ganderton',
        date: '2021-10-10',
        grade: '0.3/1'
      },
      {
        first_name: 'Thomas',
        last_name: 'Garvey',
        date: '2021-10-10',
        grade: '0.3/1'
      },
      {
        first_name: 'Akhil',
        last_name: 'STINK',
        date: '2021-10-10',
        grade: '0.3/1'
      },
    ];

</script>

<div class="overflow-x-auto w-full h-full">
    <table class="table table-zebra w-full text-sm !rounded-none">
      <!-- head -->
      <thead class='font-bold'>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Name</th>
          <th>Date</th>
          <th>Grade</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {#each table_data as row, i}
          <tr>
            <td>
              {i}
            </td>
            <td class='font-bold'>
                {#if webpage_metadata.due_start < row.date && row.date < webpage_metadata.due_end}
                  <span class="text-success">Completed</span>
                {:else if row.date < webpage_metadata.due_start}
                  <span class="text-error">Missing</span>
                {:else if webpage_metadata.due_end < row.date}
                  <span class="text-warning">Late</span>
                {:else}
                  <span class="text-info">Not Started</span>
                {/if}
            </td>
            <td>{row.first_name} {row.last_name}</td>
            <td>{row.date}</td>
            <td>{row.grade}</td>
            <td>
              <button class="btn btn-primary btn-sm text-xs p-1 px-2">Details</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

<style lang='postcss'>
  
  td, th {

    @apply p-2 min-w-[2rem];

  }

  th {
    @apply bg-neutral text-neutral-content;
  }

  div {

    border-radius: var(--rounded-btn, 0.5rem);

  }

  :where(.table *:first-child) :where(*:first-child) :where(th, td):first-child {
    border-top-left-radius: var(--rounded-btn, 0.5rem);
  }
  :where(.table *:first-child) :where(*:first-child) :where(th, td):last-child {
      border-top-right-radius: var(--rounded-btn, 0.5rem);
  }
  :where(.table *:last-child) :where(*:last-child) :where(th, td):first-child {
      border-bottom-left-radius: var(--rounded-btn, 0.5rem);
  }
  :where(.table *:last-child) :where(*:last-child) :where(th, td):last-child {
      border-bottom-right-radius: var(--rounded-btn, 0.5rem);
  }

</style>