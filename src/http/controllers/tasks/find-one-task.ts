import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaTasksRepository } from '../../repositories/prisma-tasks-repository'
import { z } from 'zod'

export async function findOneTask(req: FastifyRequest, res: FastifyReply) {
  const paramSchema = z.object({
    id: z.string(),
  })

  const { id } = paramSchema.parse(req.params)

  const tasksRepository = new PrismaTasksRepository()

  try {
    const task = await tasksRepository.findOne(id)

    return res.status(200).send(task)
  } catch (error) {
    return res.status(500).send({ message: 'Error getting task', error })
  }
}
