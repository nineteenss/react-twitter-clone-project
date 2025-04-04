import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from "typeorm"
import { User, Comment, Rehoot } from "./index"

@Entity("hoots")
export class Hoot {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @Column({ default: 0 })
  likes: number

  @Column({ default: 0 })
  rehoots: number

  @Column({ default: 0 })
  comments: number

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date

  @ManyToOne(() => User, (user) => user.hoots)
  user: User

  @OneToMany(() => Comment, (comment) => comment.hoot)
  hootComments: Comment[]

  @OneToMany(() => Rehoot, (rehoot) => rehoot.hoot)
  hootRehoots: Rehoot[]
}