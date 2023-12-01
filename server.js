import express from 'express'
import ViteExpress from 'vite-express'
import { data } from './src/data/users.js'

const app = express()
const port = 3000

app.get('/message', (_req, res) => {
  res.send('Hello from Express!')
})

app.get('/users', (_req, res) => {
  res.json(data)
})

ViteExpress.listen(app, port, () => {
  console.log(`Server running on port ${port}`)
})
