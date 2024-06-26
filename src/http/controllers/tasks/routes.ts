import { FastifyInstance } from 'fastify'
import { listAllTasks } from './list-all-tasks'
import { findOneTask } from './find-one-task'
import { createTask } from './create-tasks'
import { updateTasks } from './udpate-tasks'
import { deleteTasks } from './delete-tasks'

export async function tasksRoutes(app: FastifyInstance) {
  app.get('/tasks', listAllTasks)
  app.get('/tasks/:id', findOneTask)
  app.post('/tasks', createTask)
  app.put('/tasks/:id', updateTasks)
  app.delete('/tasks/:id', deleteTasks)
}
