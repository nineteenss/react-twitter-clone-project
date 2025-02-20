//
//  authController.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 16.02.2025
//

import bcrypt from 'bcrypt'
import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { pool } from '../db/client'
import { UserLoginSchema, UserRegisterSchema } from '../schemas/schemas'

const roundOfSalts = 10

export const register = async (req: Request, res: Response) => {
  // Validate the request body using Zod
  const validationResult = UserRegisterSchema.safeParse(req.body)

  if (!validationResult.success) {
    // If validation fails, return a 400 error with the validation errors
    return res.status(400).json({
      error: 'Validation Error',
      details: validationResult.error.errors
    })
  }

  const { username, textname, password } = validationResult.data

  try {
    const hashedPassword = await bcrypt.hash(password, roundOfSalts)

    await pool.query(`
      INSERT INTO users (
        username,
        textname,
        password
      ) VALUES ($1, $2, $3)`, [username, textname, hashedPassword])
    res.status(201).send('User registered')
  } catch (error) {
    res.status(500).send('Error registering new user')
    console.error('Error registering user:', error)
  }
}

export const login = async (req: Request, res: Response) => {
  // Validate the request body using Zod
  const validationResult = UserLoginSchema.safeParse(req.body)

  if (!validationResult.success) {
    // If validation fails, return a 400 error with the validation errors
    return res.status(400).json({
      error: 'Validation Error',
      details: validationResult.error.errors
    })
  }

  const { username, password } = validationResult.data

  try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username])
    if (user.rows.length > 0 && await bcrypt.compare(password, user.rows[0].password)) {
      const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '24h' })
      res.json({ token })
    } else {
      res.status(400).send('Invalid credentials')
    }
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).send('Internal Server Error')
  }
}

export const logout = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(400).json({ error: 'Token missing' })
  }

  try {
    //Add token to blacklist
    await pool.query('INSERT INTO blacklisted_tokens (token) VALUES ($1)', [token])
    res.status(200).json({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Logout error', error)
    res.status(500).json({ error: 'Logout failed' })
  }
}
