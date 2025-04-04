import "reflect-metadata"
import cors from 'cors';
import express from 'express';
import routes from './routes/index';
import { AppDataSource } from "./database/data-source";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors({
  // development phase only, change '*' to actual origin in production
  origin: process.env.ORIGIN ?? '*',
  credentials: true
}))
app.use(express.json())
app.use('/api', routes)

const startServer = async () => {
  try {
    await AppDataSource.initialize()
    console.log("Data Source has been initialized!")

    app.listen(port, host, () => {
      // colored 'ready' output using ANSI green color
      console.log(`[\x1b[32m ready\x1b[0m ] http://${host}:${port}`)
    })
  } catch (error) {
    console.error("Error during Data Source initialization", error)
    process.exit(1)
  }
}

startServer()
