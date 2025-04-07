import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, Unique } from "typeorm"
import { User } from "./index"

@Entity("follows")
@Unique(["follower", "followed"])
export class Follow {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date

  @ManyToOne(() => User, (user) => user.following, { onDelete: "CASCADE" })
  follower: User

  @ManyToOne(() => User, (user) => user.followers, { onDelete: "CASCADE" })
  followed: User
}