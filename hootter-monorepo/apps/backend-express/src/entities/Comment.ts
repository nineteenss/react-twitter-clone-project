import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"
import { User, Hoot } from "./index"

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Column({ type: "text" })
  content: string

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date

  @ManyToOne(() => User, (user) => user.comments, { onDelete: "CASCADE" })
  user: User

  @ManyToOne(() => Hoot, (hoot) => hoot.hootComments, { onDelete: "CASCADE" })
  hoot: Hoot
}