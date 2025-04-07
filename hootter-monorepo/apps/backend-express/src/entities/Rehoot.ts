import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm"
import { User, Hoot } from "./index"

@Entity("rehoots")
export class Rehoot {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at: Date

  @ManyToOne(() => User, (user) => user.rehoots, { onDelete: "CASCADE" })
  user: User

  @ManyToOne(() => Hoot, (hoot) => hoot.hootRehoots, { onDelete: "CASCADE" })
  hoot: Hoot
}