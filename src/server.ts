import cors from '@fastify/cors'
import { app } from './app'
import dotenv from 'dotenv'

dotenv.config()

app.register(cors, {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
})

app
  .listen({
    host: '0.0.0.0',
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is running on port 3333')
  })
