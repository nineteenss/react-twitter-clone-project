import "reflect-metadata"
import { DataSource } from "typeorm"
import {
  User,
  Hoot,
  Comment,
  Rehoot,
  Follow,
  BlacklistedToken
} from "../entities"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USER || "username",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "hootter",
  synchronize: true, // Set to false in production
  logging: process.env.NODE_ENV === "development",
  entities: [
    User,
    Hoot,
    Comment,
    Rehoot,
    Follow,
    BlacklistedToken
  ],
  migrations: [],
  subscribers: [],
})