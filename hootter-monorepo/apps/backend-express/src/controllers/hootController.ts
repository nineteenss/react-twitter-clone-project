//
//  hootController.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import { Request, Response } from 'express'
import { pool } from '../db/client'
import { v4 as uuid4 } from 'uuid'
import { z } from 'zod'

interface CreateHootRequest {
  content: string
  user_id: string
}

export const getHoots = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM hoots ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching hoots:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const createHoot = async (req: Request<{}, {}, CreateHootRequest>, res: Response) => {
  const { content, user_id } = req.body

  if (!isValidUUID(user_id)) {
    return res.status(400).json({ error: 'Invalid UUID format' })
  }

  try {
    const result = await pool.query(
      'INSERT INTO hoots (content, user_id) VALUES ($1, $2) RETURNING *',
      [content, user_id]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error creating hoot:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
