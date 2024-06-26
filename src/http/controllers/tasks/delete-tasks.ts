import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaTasksRepository } from '../../repositories/prisma-tasks-repository'
import { z } from 'zod'

export async function deleteTasks(req: FastifyRequest, res: FastifyReply) {
  const paramSchema = z.object({
    id: z.string(),
  })

  const { id } = paramSchema.parse(req.params)

  const tasksRepository = new PrismaTasksRepository()

  try {
    await tasksRepository.delete(id)

    return res.status(204).send()
  } catch (error) {
    return res.status(500).send({ message: 'Error deleting task', error })
  }
}
