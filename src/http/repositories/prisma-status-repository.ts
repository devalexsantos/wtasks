import { prisma } from '../../lib/prisma'

type CreateStatusData = {
  emoji: string
  name: string
  userId: string
}

type UpdateStatusData = {
  id: string
  emoji?: string
  name?: string
}

export class PrismaStatusRepository {
  async listAll(id: string) {
    const status = await prisma.status.findMany({
      where: {
        userId: id,
      },
    })
    return status
  }

  async create({ emoji, name, userId }: CreateStatusData) {
    const status = await prisma.status.create({
      data: {
        emoji,
        name,
        userId,
      },
    })
    return status
  }

  async findOne(id: string) {
    const status = await prisma.status.findUnique({
      where: {
        id,
      },
    })
    return status
  }

  async update({ id, emoji, name }: UpdateStatusData) {
    const status = await prisma.status.update({
      where: {
        id,
      },
      data: {
        emoji,
        name,
      },
    })
    return status
  }

  async delete(id: string) {
    await prisma.status.delete({
      where: {
        id,
      },
    })
  }
}
