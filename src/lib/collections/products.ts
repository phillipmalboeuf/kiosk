import type { products as Product, Prisma } from '@prisma/client'
import prisma from '$lib/clients/prisma'

export type Fields = {
  name: string,
  type: 'text' | 'number',
  format?: Intl.NumberFormatOptions
}[]

export const Products = {
  slug: 'products',
  title: {
    fr: 'Produits',
    en: 'Products'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'price',
      type: 'number',
      format: {
        style: 'currency',
        currency: 'CAD'
      }
    }
  ] as Fields,
  postprocess(item: Product) {
    return {
      ...item
    }
  },
  async many(where: Prisma.productsWhereInput, take=50) {
    return (await prisma.products.findMany({ where, take })).map(Products.postprocess)
  },
  async one(where: Prisma.productsWhereInput) {
    return prisma.products.findFirst({ where })
  },
  async createOne(data: Prisma.productsCreateArgs['data']) {
    return prisma.products.create({ data })
  },
  async createMany(data: Prisma.productsCreateManyArgs['data']) {
    return prisma.products.createMany({ data })
  },
  async updateOne(id: string, data: Prisma.productsUpdateArgs['data']) {
    return prisma.products.update({ where: { id }, data })
  },
  async destroyOne(id: string) {
    return prisma.products.delete({ where: { id } })
  },
}