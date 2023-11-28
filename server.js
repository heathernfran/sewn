import express from 'express'
import ViteExpress from 'vite-express'

const app = express()
const port = 3000

app.get('/message', (_req, res) => {
  res.send('Hello from Express!')
})

ViteExpress.listen(app, port, () => {
  console.log(`Server running on port ${port}`)
})
