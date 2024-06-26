import { prisma } from '../../lib/prisma'

type CreateTaskData = {
  title: string
  description?: string
  statusId: string
  userId: string
  categoryId?: string
}

type UpdateTaskData = {
  id: string
  title?: string
  description?: string
  statusId?: string
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

  async listAll(id: string) {
    return prisma.task.findMany({
      where: {
        userId: id,
      },
    })
  }

  async findOne(id: string) {
    return prisma.task.findUnique({
      where: {
        id,
      },
    })
  }

  async update({
    id,
    title,
    description,
    statusId,
    categoryId,
  }: UpdateTaskData) {
    return prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        statusId,
        categoryId,
      },
    })
  }

  async delete(id: string) {
    return prisma.task.delete({
      where: {
        id,
      },
    })
  }
}
