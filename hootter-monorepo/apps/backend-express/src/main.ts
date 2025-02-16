import cors from 'cors';
import express from 'express';
import { pool } from './db/client';
import routes from './routes/index';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors({
  origin: process.env.ORIGIN ?? '*',
  credentials: true
}))
app.use(express.json())
app.use('/api', routes)

const initializeDatabase = async () => {
  try {
    // Connection test
    await pool.query('SELECT NOW()', (err, res) => {
      if (err) {
        console.error('Error connecting to the database', err)
      } else {
        console.log('Connected to the database @', res.rows[0].now)
      }
    })

    // Create 'users' table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create 'hoots' table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS hoots (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        user_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

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
    console.log(`[ ready ] http://${host}:${port}`)
  })
}

startServer()
