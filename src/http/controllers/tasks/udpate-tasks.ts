import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaTasksRepository } from '../../repositories/prisma-tasks-repository'

export async function updateTasks(req: FastifyRequest, res: FastifyReply) {
  const boySchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    statusId: z.string(),
    categoryId: z.string().optional(),
  })

  const body = boySchema.parse(req.body)

  const tasksRepository = new PrismaTasksRepository()

  try {
    const updatedTask = await tasksRepository.update(body)

    return res.status(200).send(updatedTask)
  } catch (error) {
    return res.status(500).send({ message: 'Error updating task', error })
  }
}
