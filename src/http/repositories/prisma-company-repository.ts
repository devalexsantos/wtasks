import { prisma } from '../../lib/prisma'

type CreateCompanyData = {
  name: string
  userId: string
  slug: string
}

type UpdateCompanyData = {
  id: string
  name?: string
  slug?: string
}

export class PrismaCompanyRepository {
  async listAll(id: string) {
    const company = await prisma.company.findMany({
      where: {
        userId: id,
      },
    })
    return company
  }

  async create({ name, userId, slug }: CreateCompanyData) {
    const company = await prisma.company.create({
      data: {
        name,
        userId,
        slug,
      },
    })
    return company
  }

  async findOne(id: string) {
    const company = await prisma.company.findUnique({
      where: {
        id,
      },
    })
    return company
  }

  async update({ id, name, slug }: UpdateCompanyData) {
    const company = await prisma.company.update({
      where: {
        id,
      },
      data: {
        name,
        slug,
      },
    })
    return company
  }

  async delete(id: string) {
    await prisma.company.delete({
      where: {
        id,
      },
    })
  }
}
