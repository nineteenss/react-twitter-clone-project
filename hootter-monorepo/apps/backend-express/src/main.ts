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

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});


// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err)
  } else {
    console.log('Connected to the database @', res.rows[0].now)
  }
})
