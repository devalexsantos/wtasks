import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaUserRepository } from '../../repositories/prisma-user-repository'

export async function createUser(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
  })

  const { name, email } = bodySchema.parse(req.body)

  const userRepository = new PrismaUserRepository()

  try {
    await userRepository.create({ name, email })

    return res.status(201).send({ message: 'User created' })
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user', error })
  }
}
