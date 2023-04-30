import prisma from '$lib/clients/prisma'
import type { products as Product, Prisma } from '@prisma/client'
import type { Fields } from './products'

export const Collections = {
  slug: 'collections',
  title: {
    fr: 'Collections',
    en: 'Collections'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ] as Fields,
  async many(where: Prisma.productsWhereInput, take=50) {
    return prisma.collections.findMany({ where, take })
  },
  async one(where: Prisma.productsWhereInput) {
    return prisma.collections.findFirst({ where })
  },
  async createOne(data: Prisma.productsCreateArgs['data']) {
    return prisma.collections.create({ data })
  },
  async createMany(data: Prisma.productsCreateManyArgs['data']) {
    return prisma.collections.createMany({ data })
  },
  async updateOne(id: string, data: Prisma.productsUpdateArgs['data']) {
    return prisma.collections.update({ where: { id }, data })
  },
  async destroyOne(id: string) {
    return prisma.collections.delete({ where: { id } })
  },
}