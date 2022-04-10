import { createPool } from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

export async function connect() {
  const connection = await createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  })
  return connection
}
