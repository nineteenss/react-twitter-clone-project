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

export const UserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(6)
})
