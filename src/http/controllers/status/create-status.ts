import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaStatusRepository } from '../../repositories/prisma-status-repository'

export async function createStatus(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    userId: z.string(),
    emoji: z.string(),
    name: z.string(),
  })

  const { userId, emoji, name } = bodySchema.parse(req.body)

  const statusRepository = new PrismaStatusRepository()

  try {
    await statusRepository.create({
      userId,
      emoji,
      name,
    })

    return res.status(201).send({ message: 'Status created' })
  } catch (error) {
    return res.status(500).send({ message: 'Error creating status', error })
  }
}
