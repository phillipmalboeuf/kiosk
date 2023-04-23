<script lang="ts">
    import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';

    export let data: PageData;

		const source: TableSource = {
			// A list of heading labels.
			head: ['Title'],
			// The data visibly shown in your table body UI.
			body: tableMapperValues(data.products, ['title']),
			// Optional: The data returned when interactive is enabled and a row is clicked.
			meta: tableMapperValues(data.products, ['id', 'title']),
			// Optional: A list of footer labels.
			// foot: ['Total', '', '<code>31.7747</code>']
		};
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1>Products</h1>
	<Table interactive {source} />
</div>


<style lang="postcss">
	 
</style>
