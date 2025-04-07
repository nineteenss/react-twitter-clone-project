import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from "typeorm"
import { User, Comment, Rehoot } from "./index"

@Entity("hoots")
export class Hoot {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Column({ type: "text" })
  content: string

  @Column({ type: "int", default: 0 })
  likes: number

  @Column({ type: "int", default: 0 })
  rehoots: number

  @Column({ type: "int", default: 0 })
  comments: number

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date

  @ManyToOne(() => User, (user) => user.hoots, { onDelete: "CASCADE" })
  user: User

  @OneToMany(() => Comment, (comment) => comment.hoot)
  hootComments: Comment[]

  @OneToMany(() => Rehoot, (rehoot) => rehoot.hoot)
  hootRehoots: Rehoot[]
}