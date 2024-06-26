import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaCompanyRepository } from '../../repositories/prisma-company-repository'

export async function findOneCompany(req: FastifyRequest, res: FastifyReply) {
  const paramSchema = z.object({
    id: z.string(),
  })

  const { id } = paramSchema.parse(req.params)

  const companyRepository = new PrismaCompanyRepository()

  try {
    const company = await companyRepository.findOne(id)

    return res.status(200).send(company)
  } catch (error) {
    return res.status(500).send({ message: 'Error listing company', error })
  }
}
