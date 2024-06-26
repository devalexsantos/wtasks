import { z } from 'zod'
import { PrismaCompanyRepository } from '../../repositories/prisma-company-repository'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function createCompany(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
    userId: z.string(),
    slug: z.string(),
  })

  const { name, userId, slug } = bodySchema.parse(req.body)

  const companyRepository = new PrismaCompanyRepository()

  try {
    const company = await companyRepository.create({ name, userId, slug })

    return res.status(201).send(company)
  } catch (error) {
    return res.status(500).send({ message: 'Error creating company', error })
  }
}
