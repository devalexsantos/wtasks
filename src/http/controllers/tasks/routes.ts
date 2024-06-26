import { FastifyInstance } from 'fastify'
import { listAllTasks } from './list-all-tasks'

export async function tasksRoutes(app: FastifyInstance) {
  app.get('/tasks', listAllTasks)
}
