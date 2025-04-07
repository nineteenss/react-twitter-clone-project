import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity("blacklisted_tokens")
export class BlacklistedToken {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Column({ type: "text", unique: true })
  token: string

  @CreateDateColumn({ type: "timestamp with time zone" })
  blacklisted_at: Date
}