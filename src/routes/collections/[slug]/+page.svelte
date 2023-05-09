<script lang="ts">
    import { tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
    import Table from '$lib/components/Table.svelte';
    import { goto } from '$app/navigation';

    export let data: PageData;

		let source: TableSource
    
    $: {
      source = {
        // A list of heading labels.
        head: data.fields.map(field => field.name),
        // The data visibly shown in your table body UI.
        body: tableMapperValues(data.items, data.fields.map(field => field.name)),
        // Optional: The data returned when interactive is enabled and a row is clicked.
        meta: tableMapperValues(data.items, ['id', ...data.fields.map(field => field.name)]),
        // Optional: A list of footer labels.
        // foot: ['Total', '', '<code>31.7747</code>']
      }
    };
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1>{data.title.en}</h1>
	<Table interactive {source} on:selected={({ detail }) => {
    goto(`/collections/${data.slug}/${detail[1]}`)
  }}>
    <div slot="cell" let:value let:index>
      {#if data.fields[index].type === 'number' && data.fields[index].format}
      {value ? new Intl.NumberFormat('en-CA', data.fields[index].format).format(parseFloat(value)) : '-'}
      {:else}
      {value}
      {/if}
    </div>
  </Table>
</div>