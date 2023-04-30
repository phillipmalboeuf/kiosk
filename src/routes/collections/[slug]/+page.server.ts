import { collections } from '$lib/collections';

export const load = (async ({ params }) => {
  const collection = collections.find(collection => collection.slug === params.slug)
  return {
    slug: params.slug,
    title: collection.title,
    fields: collection.fields,
    items: collection.many({})
  };
})