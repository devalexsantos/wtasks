import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaUserRepository } from '../../repositories/prisma-user-repository'

export async function listAllUsers(_: FastifyRequest, res: FastifyReply) {
  const userRepository = new PrismaUserRepository()

  try {
    const users = await userRepository.listAll()

    return res.status(200).send(users)
  } catch (error) {
    return res.status(500).send({ message: 'Error listing users', error })
  }
}
