import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaCompanyRepository } from '../../repositories/prisma-company-repository'

export async function updateCompany(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    slug: z.string().optional(),
  })

  const { id, name, slug } = bodySchema.parse(req.body)

  const companyRepository = new PrismaCompanyRepository()

  try {
    await companyRepository.update({ id, name, slug })

    return res.status(200).send({ message: 'Company updated' })
  } catch (error) {
    return res.status(500).send({ message: 'Error updating company', error })
  }
}
