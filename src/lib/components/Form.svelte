<script lang="ts">
  import type { Fields } from '$lib/collections/products'
  import { enhance } from '$app/forms'

  export let id: string
  export let fields: Fields
  export let item: {[name: string]: any}
</script>


<form {id} method="POST">
  <div class="card variant-ghost-success p-4 w-full text-token space-y-4">
    {#each fields as field}
    <label class="label">
      <span>{field.name}</span>
      <input class="input" type={field.type} value={item[field.name]}
        {...field.type === 'number' && { step: "any" }}
      />
    </label><br>
    {/each}
  </div>
</form>