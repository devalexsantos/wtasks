import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaStatusRepository } from '../../repositories/prisma-status-repository'

export async function findOneStatus(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    id: z.string(),
  })

  const { id } = bodySchema.parse(req.body)

  const statusRepository = new PrismaStatusRepository()

  try {
    const status = await statusRepository.findOne(id)

    return res.status(200).send(status)
  } catch (error) {
    return res.status(500).send({ message: 'Error finding status', error })
  }
}
