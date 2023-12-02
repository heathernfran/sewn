import fs from 'node:fs'
import express from 'express'
import ViteExpress from 'vite-express'

const app = express()
const port = 3000

const filePath = './src/data/users.json'
const fileContent = fs.readFileSync(filePath, 'utf-8')
const data = JSON.parse(fileContent)

app.get('/message', (_req, res) => {
  res.send('Hello from Express!')
})

app.get('/users', (req, res) => {
  const perPage = 10
  const page = parseInt(req.query.page, 10) || 0
  const start = page * perPage
  const end = start + perPage
  const results = data.slice(start, end)
  res.json(results)
})

app.get('/users/:id', (req, res) => {
  const { id } = req.params
  const result = data.find((user) => user.id === id)
  res.json(result)
})

ViteExpress.listen(app, port, () => {
  console.log(`Server running on port ${port}`)
})
