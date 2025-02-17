import cors from 'cors';
import express from 'express';
import { pool } from './db/client';
import databaseCheckCreate from './db/helper';
import routes from './routes/index';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors({
  // Development phase only, change '*' to actual origin in production
  origin: process.env.ORIGIN ?? '*',
  credentials: true
}))
app.use(express.json())
app.use('/api', routes)

const initializeDatabase = async () => {
  try {
    await databaseCheckCreate(pool)
    console.log('Database tables verified/created')
  } catch (error) {
    console.error('Failed to initialize database:', error)
    process.exit(1)
  }
}

// Start server after DB initialization
const startServer = async () => {
  await initializeDatabase()

  app.listen(port, host, () => {
    // Colored 'ready' output using ANSI green color
    console.log(`[\x1b[32m ready\x1b[0m ] http://${host}:${port}`)
  })
}

startServer()
