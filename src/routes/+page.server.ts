// import type { PageServerLoad } from './$types';

import prisma from '$lib/clients/prisma.js';

export const load = (async ({ params }) => {
    return {
        products: prisma.products.findMany({})
    };
})