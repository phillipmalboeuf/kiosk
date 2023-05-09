<script lang="ts">
    import type { PageData } from './$types';
    import Form from '$lib/components/Form.svelte';

    export let data: PageData;
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1>{data.item.title}</h1>

  <Form id={`edit-${data.item.id}`} item={data.item} fields={data.collection.fields} />
</div>

