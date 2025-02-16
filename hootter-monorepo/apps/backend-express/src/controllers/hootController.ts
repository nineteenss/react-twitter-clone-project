//
//  hootController.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import { Request, Response } from 'express'
import { pool } from '../db/client'
import { HootSchema } from '../schemas/schemas'

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
  // Validate the request body using Zod
  const validationResult = HootSchema.safeParse(req.body)

  if (!validationResult.success) {
    // If validation fails, return a 400 error with the validation errors
    return res.status(400).json({
      error: 'Validation Error',
      details: validationResult.error.errors
    })
  }

  const { content, user_id } = req.body

  try {
    // Check if user exists
    const userExists = await pool.query('SELECT id FROM users WHERE id = $1', [user_id])
    if (userExists.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Insert hoot
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
