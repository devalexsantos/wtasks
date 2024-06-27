import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { tasksRoutes } from './http/controllers/tasks/routes'
import { statusRoutes } from './http/controllers/status/routes'
import { companyRoutes } from './http/controllers/company/routes'

export const app = fastify()

const API_KEY = process.env.API_KEY

const validateToken = async (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.headers.authorization

  if (token !== `Bearer ${API_KEY}`) {
    reply.code(401).send('Unauthorized')
  }
}

app.addHook('preHandler', validateToken)

app.register(tasksRoutes)
app.register(statusRoutes)
app.register(companyRoutes)
