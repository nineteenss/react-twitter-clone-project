//
//  auth.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 17.02.2025
//

import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { pool } from '../db/client'

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  console.log('JWT Secret not found.')
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const blacklisted = await pool.query('SELECT * FROM blacklisted_tokens WHERE token = $1', [token])
    if (blacklisted.rows.length > 0) {
      return res.status(401).json({ error: 'Token revoked' })
    }

    // Verify JWT
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string }
    req.body = { user_id: decoded.id }
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
    console.log("Error", error)
  }
}
