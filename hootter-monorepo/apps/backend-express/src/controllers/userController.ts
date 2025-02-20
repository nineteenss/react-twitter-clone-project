//
//  userController.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 20.02.2025
//

import { Request, Response } from 'express'
import { pool } from '../db/client'
import { ERR_CODE } from '../constants/errorStatus'

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { user_id } = req.params

  try {
    const result = await pool.query(
      'SELECT username, textname FROM users WHERE id = $1',
      [user_id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Follow user
export const followUser = async (req: Request, res: Response) => {
  const { follower_id, followed_id } = req.body

  try {
    const result = await pool.query(
      'INSERT INTO follows (follower_id, followed_id) VALUES ($1, $2) RETURNING *',
      [follower_id, followed_id]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error following user:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Unfollow user
export const unfollowUser = async (req: Request, res: Response) => {
  const { follower_id, followed_id } = req.body

  try {
    const result = await pool.query(
      'DELETE FROM follows WHERE follower_id = $1 AND followed_id = $2 RETURNING *',
      [follower_id, followed_id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Following relationship not found' })
    }

    res.status(201).json({ message: 'Unfollowed successfully' })
  } catch (error) {
    console.error('Error unfollowing user:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Search users
export const searchUser = async (req: Request, res: Response) => {
  const { query } = req.query

  try {
    const result = await pool.query(
      'SELECT id, username, textname FROM users WHERE username ILIKE = $1',
      [`%${query}%`]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error searching user:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}
