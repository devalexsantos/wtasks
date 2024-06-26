import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaUserRepository } from '../../repositories/prisma-user-repository'

export async function updateUser(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  })

  const { id, name, email } = bodySchema.parse(req.body)

  const userRepository = new PrismaUserRepository()

  try {
    await userRepository.update({ id, name, email })

    return res.status(200).send({ message: 'User updated' })
  } catch (error) {
    return res.status(500).send({ message: 'Error updating user', error })
  }
}
