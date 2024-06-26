import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaCompanyRepository } from '../../repositories/prisma-company-repository'
import { z } from 'zod'

export async function listAllCompanies(req: FastifyRequest, res: FastifyReply) {
  const paramSchema = z.object({
    id: z.string(),
  })

  const { id } = paramSchema.parse(req.params)

  const companyRepository = new PrismaCompanyRepository()

  try {
    const companies = await companyRepository.listAll(id)

    return res.status(200).send(companies)
  } catch (error) {
    return res.status(500).send({ message: 'Error listing companies', error })
  }
}
