import express, { Application } from 'express'
import morgan from 'morgan'
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'
import dotenv from 'dotenv'

dotenv.config()

export class App {
  private app: Application

  constructor() {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  settings() {
    this.app.set('port', process.env.PORT)
  }

  middlewares() {
    this.app.use(morgan('dev'))
    this.app.use(express.json())
  }

  routes() {
    this.app.use(IndexRoutes)
    this.app.use('/posts', PostRoutes)
  }

  async listen() {
    await this.app.listen(this.app.get('port'))
    console.log('Server on port', this.app.get('port'))
  }
}
