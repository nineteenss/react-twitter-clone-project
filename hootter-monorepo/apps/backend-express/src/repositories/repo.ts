import { AppDataSource } from "../database/data-source";
import {
  User,
  Hoot,
  Comment,
  Rehoot,
  Follow,
  BlacklistedToken
} from "../entities";

export const userRepository = AppDataSource.getRepository(User)
export const hootRepository = AppDataSource.getRepository(Hoot)
export const commentRepository = AppDataSource.getRepository(Comment)
export const rehootRepository = AppDataSource.getRepository(Rehoot)
export const followRepository = AppDataSource.getRepository(Follow)
export const blacklistedTokenRepository = AppDataSource.getRepository(BlacklistedToken)