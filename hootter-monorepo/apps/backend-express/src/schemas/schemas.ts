//
//  schemas.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 16.02.2025
//

import { z } from 'zod'

export const HootSchema = z.object({
  content: z.string().min(1),
  user_id: z.number()
})

export const CommentSchema = z.object({
  content: z.string().min(1),
  user_id: z.number()
})

export const UserLoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(6)
})

export const UserRegisterSchema = z.object({
  username: z.string().min(1),
  textname: z.string().min(1),
  password: z.string().min(6)
})
