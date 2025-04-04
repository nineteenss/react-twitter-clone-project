import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm"
import { Hoot, Comment, Rehoot, Follow } from "./index"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50, unique: true })
  username: string

  @Column({ length: 100 })
  textname: string

  @Column()
  password: string

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date

  @OneToMany(() => Hoot, (hoot) => hoot.user)
  hoots: Hoot[]

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[]

  @OneToMany(() => Rehoot, (rehoot) => rehoot.user)
  rehoots: Rehoot[]

  @OneToMany(() => Follow, (follow) => follow.follower)
  following: Follow[]

  @OneToMany(() => Follow, (follow) => follow.followed)
  followers: Follow[]
}