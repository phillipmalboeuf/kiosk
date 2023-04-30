import { collections } from '$lib/collections';

export const load = (async ({ params }) => {
  return {
    slug: params.slug,
    collections: collections.map(({ title, fields, slug }) => {
      return {
        title, fields, slug,
      }
    })
    // items: collections.find(collection => collection.slug === params.slug).many({})
  };
})