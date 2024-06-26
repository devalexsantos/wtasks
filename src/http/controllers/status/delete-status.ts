import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaStatusRepository } from '../../repositories/prisma-status-repository'

export async function deleteStatus(req: FastifyRequest, res: FastifyReply) {
  const paramSchema = z.object({
    id: z.string(),
  })

  const { id } = paramSchema.parse(req.params)

  const statusRepository = new PrismaStatusRepository()

  try {
    await statusRepository.delete(id)

    return res.status(200).send({ message: 'Status deleted' })
  } catch (error) {
    return res.status(500).send({ message: 'Error deleting status', error })
  }
}
