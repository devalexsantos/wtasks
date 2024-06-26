import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaStatusRepository } from '../../repositories/prisma-status-repository'

export async function listAllStatus(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    userId: z.string(),
  })

  const { userId } = bodySchema.parse(req.body)

  const statusRepository = new PrismaStatusRepository()

  try {
    const status = await statusRepository.listAll(userId)

    return res.status(200).send(status)
  } catch (error) {
    return res.status(500).send({ message: 'Error listing status', error })
  }
}
