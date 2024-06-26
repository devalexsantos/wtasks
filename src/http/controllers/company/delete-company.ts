import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaCompanyRepository } from '../../repositories/prisma-company-repository'

export async function deleteCompany(req: FastifyRequest, res: FastifyReply) {
  const paramSchema = z.object({
    id: z.string(),
  })

  const { id } = paramSchema.parse(req.params)

  const companyRepository = new PrismaCompanyRepository()

  try {
    await companyRepository.delete(id)

    return res.status(204).send()
  } catch (error) {
    return res.status(500).send({ message: 'Error deleting company', error })
  }
}
