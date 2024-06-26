import fastify from 'fastify'
import { tasksRoutes } from './http/controllers/tasks/routes'

export const app = fastify()

app.register(tasksRoutes)
