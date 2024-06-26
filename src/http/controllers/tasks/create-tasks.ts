import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaTasksRepository } from '../../repositories/prisma-tasks-repository'

export async function createTask(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    statusId: z.string(),
    userId: z.string(),
    categoryId: z.string().optional(),
  })

  const body = bodySchema.parse(req.body)

  const tasksRepository = new PrismaTasksRepository()

  try {
    await tasksRepository.create(body)

    return res.status(201).send({ message: 'Task created' })
  } catch (error) {
    return res.status(500).send({ message: 'Error creating task', error })
  }
}
