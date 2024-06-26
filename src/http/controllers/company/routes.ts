import { FastifyInstance } from 'fastify'
import { listAllCompanies } from './list-all-company'
import { findOneCompany } from './find-one-company'
import { createCompany } from './create-company'
import { updateCompany } from './update-company'
import { deleteCompany } from './delete-company'

export async function companyRoutes(app: FastifyInstance) {
  app.get('/company', listAllCompanies)
  app.get('/company/:id', findOneCompany)
  app.post('/company', createCompany)
  app.put('/company/:id', updateCompany)
  app.delete('/company/:id', deleteCompany)
}
