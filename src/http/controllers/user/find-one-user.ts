import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaUserRepository } from '../../repositories/prisma-user-repository'

export async function findOneUser(req: FastifyRequest, res: FastifyReply) {
  const paramSchema = z.object({
    id: z.string(),
  })

  const { id } = paramSchema.parse(req.params)

  const userRepository = new PrismaUserRepository()

  try {
    const user = await userRepository.findById(id)

    return res.status(200).send(user)
  } catch (error) {
    return res.status(500).send({ message: 'Error finding user', error })
  }
}
