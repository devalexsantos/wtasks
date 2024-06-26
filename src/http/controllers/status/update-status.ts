import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaStatusRepository } from '../../repositories/prisma-status-repository'
import { z } from 'zod'

export async function updateStatus(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    id: z.string(),
    emoji: z.string().optional(),
    name: z.string().optional(),
  })

  const { id, emoji, name } = bodySchema.parse(req.body)

  const statusRepository = new PrismaStatusRepository()

  try {
    await statusRepository.update({
      id,
      emoji,
      name,
    })

    return res.status(200).send({ message: 'Status updated' })
  } catch (error) {
    return res.status(500).send({ message: 'Error updating status', error })
  }
}
