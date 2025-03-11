//
//  hootController.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import { Request, Response } from 'express'
import { pool } from '../db/client'
import { CommentSchema, HootSchema } from '@hootter/shared'
import { ERR_CODE } from '../constants/errorStatus'

// Get all existing hoots
export const getHoots = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM hoots ORDER BY created_at DESC'
    )

    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching hoots:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Create new hoot from user
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
    const userExists = await pool.query(
      'SELECT id FROM users WHERE id = $1',
      [user_id]
    )

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
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Delete hoot
export const deleteHoot = async (req: Request, res: Response) => {
  const { hoot_id } = req.params

  try {
    const result = await pool.query(
      'DELETE FROM hoots WHERE id = $1 RETURNING *',
      [hoot_id]
    )
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Hoot not found' })
    }

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error deleting hoot:', error)
    res.status(500).json(ERR_CODE.INTERNAL)
  }
}

// Update hoot stats
export const updateHootsStats = async (req: Request, res: Response) => {
  const { hoot_id } = req.params
  const { likes, rehoots, comments } = req.body

  try {
    const result = await pool.query(
      'UPDATE hoots SET likes = $1, rehoots = $2, comments = $3 WHERE id = $4 RETURNING *',
      [likes, rehoots, comments, hoot_id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Hoot not found' })
    }

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error updating hoot stats:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Add comment
export const addComment = async (req: Request, res: Response) => {
  const validationResult = CommentSchema.safeParse(req.body)

  if (!validationResult.success) {
    // If validation fails, return a 400 error with the validation errors
    return res.status(400).json({
      error: 'Validation Error',
      details: validationResult.error.errors
    })
  }

  const { hoot_id } = req.params
  const { user_id, content } = req.body

  try {
    const result = await pool.query(
      'INSERT INTO comments (hoot_id, user_id, content) VALUES ($1, $2, $3) RETURNING *',
      [hoot_id, user_id, content]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error adding comment:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// ReHoot a hoot
export const reHoot = async (req: Request, res: Response) => {
  const { hoot_id } = req.params
  const { user_id } = req.body

  try {
    const result = await pool.query(
      'INSERT INTO rehoots (hoot_id, user_id) VALUES ($1, $2) RETURNING *',
      [hoot_id, user_id]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error performing rehoot:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Like hoot
export const likeHoot = async (req: Request, res: Response) => {
  const { hoot_id } = req.params

  try {
    const result = await pool.query(
      'UPDATE hoots SET likes = likes + 1 WHERE id = $1 RETURNING *',
      [hoot_id]
    )

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Hoot not found' })
    }

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error liking hoot:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}
