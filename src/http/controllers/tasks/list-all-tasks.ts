import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaTasksRepository } from '../../repositories/prisma-tasks-repository'

export async function listAllTasks(_: FastifyRequest, res: FastifyReply) {
  const tasksRepository = new PrismaTasksRepository()

  try {
    const tasks = await tasksRepository.listAll()

    return res.status(200).send(tasks)
  } catch (error) {
    return res.status(500).send({ message: 'Error listing tasks', error })
  }
}
