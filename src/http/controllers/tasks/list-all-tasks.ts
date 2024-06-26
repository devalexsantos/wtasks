import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaTasksRepository } from '../../repositories/prisma-tasks-repository'
import { z } from 'zod'

export async function listAllTasks(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    userId: z.string(),
  })

  const { userId } = bodySchema.parse(req.body)

  const tasksRepository = new PrismaTasksRepository()

  try {
    const tasks = await tasksRepository.listAll(userId)

    return res.status(200).send(tasks)
  } catch (error) {
    return res.status(500).send({ message: 'Error listing tasks', error })
  }
}
