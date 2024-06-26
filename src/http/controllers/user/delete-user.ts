import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaUserRepository } from '../../repositories/prisma-user-repository'

export async function deleteUser(req: FastifyRequest, res: FastifyReply) {
  const paramSchema = z.object({
    id: z.string(),
  })

  const { id } = paramSchema.parse(req.params)

  const userRepository = new PrismaUserRepository()

  try {
    await userRepository.delete(id)

    return res.status(200).send({ message: 'User deleted' })
  } catch (error) {
    return res.status(500).send({ message: 'Error deleting user', error })
  }
}
