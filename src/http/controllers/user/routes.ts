import { FastifyInstance } from 'fastify'
import { listAllUsers } from './list-all-users'
import { findOneUser } from './find-one-user'
import { createUser } from './create-user'
import { updateUser } from './update-user'
import { deleteUser } from './delete-user'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/users', listAllUsers)
  app.get('/users/:id', findOneUser)
  app.post('/users', createUser)
  app.put('/users/:id', updateUser)
  app.delete('/users/:id', deleteUser)
}
