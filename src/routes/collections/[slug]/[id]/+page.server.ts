import { collections } from '$lib/collections';

export const load = (async ({ params }) => {
  const collection = collections.find(collection => collection.slug === params.slug)
  return {
    slug: params.slug,
    collection: {
      title: collection.title,
      fields: collection.fields,
    },
    item: collection.one({ title: params.id })
  };
})

import type { Actions } from './$types';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    console.log(data)
    return { success: true }
  }
} satisfies Actions;