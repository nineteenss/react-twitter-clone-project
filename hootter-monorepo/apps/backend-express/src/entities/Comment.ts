import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"
import { User, Hoot } from "./index"

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date

  @ManyToOne(() => User, (user) => user.comments)
  user: User

  @ManyToOne(() => Hoot, (hoot) => hoot.hootComments)
  hoot: Hoot
}