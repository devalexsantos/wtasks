import { prisma } from '../../lib/prisma'

type CreateTaskData = {
  title: string
  description?: string
  statusId: string
  userId: string
  categoryId?: string
}

export class PrismaTasksRepository {
  async create({
    title,
    description,
    statusId,
    userId,
    categoryId,
  }: CreateTaskData) {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        statusId,
        userId,
        categoryId,
      },
    })
    return task
  }

  async listAll() {
    return prisma.task.findMany()
  }
}
