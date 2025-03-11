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
  username: z.string().min(1, {
    message: 'Username is required'
  }),
  password: z.string().min(3, {
    message: 'Password must be at least 3 characters long'
  })
})

export const UserRegisterSchema = z.object({
  username: z.string().min(1, {
    message: 'Username is required'
  }),
  textname: z.string().min(1, {
    message: 'Your name is required'
  }),
  password: z.string().min(3, {
    message: 'Password must be at least 3 characters long'
  })
})
