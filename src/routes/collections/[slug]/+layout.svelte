<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="container mx-auto p-8 space-y-8">
  <ol class="breadcrumb">
    <li class="crumb"><a class="anchor" href="/">Dashboard</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>

    {#if $page.data.item}
    <li class="crumb"><a class="anchor" href="/collections/{$page.data.slug}">{$page.data.collection.title.en}</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li>{$page.data.item.title}</li>
    {:else}
    <li>{$page.data.title.en}</li>
    {/if}
  </ol>
</div>
				
<slot />