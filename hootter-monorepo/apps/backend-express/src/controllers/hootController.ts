//
//  hootController.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import { Request, Response } from 'express'
import { pool } from '../db/client'

export const getHoots = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM hoots ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching hoots:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const createHoot = async (req: Request, res: Response) => {
  const { content, user_id } = req.body

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
