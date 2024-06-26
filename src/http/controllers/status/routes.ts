import { FastifyInstance } from 'fastify'
import { listAllStatus } from './list-all-status'
import { findOneStatus } from './find-one-status'
import { createStatus } from './create-status'
import { updateStatus } from './update-status'
import { deleteStatus } from './delete-status'

export async function statusRoutes(app: FastifyInstance) {
  app.get('/status', listAllStatus)
  app.get('/status/:id', findOneStatus)
  app.post('/status', createStatus)
  app.put('/status/:id', updateStatus)
  app.delete('/status/:id', deleteStatus)
}
