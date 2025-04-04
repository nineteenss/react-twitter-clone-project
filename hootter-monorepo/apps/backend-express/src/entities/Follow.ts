import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, Unique } from "typeorm"
import { User } from "./index"

@Entity("follows")
@Unique(["follower", "followed"])
export class Follow {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date

  @ManyToOne(() => User, (user) => user.following)
  follower: User

  @ManyToOne(() => User, (user) => user.followers)
  followed: User
}