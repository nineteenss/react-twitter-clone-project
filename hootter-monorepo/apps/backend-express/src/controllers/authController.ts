import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from "express"
import { UserLoginSchema, UserRegisterSchema } from '@hootter/shared'
import { userRepository, blacklistedTokenRepository } from '../repositories/repo'
import { ERR_CODE } from '../constants/errorStatus'


const roundOfSalts = 10

export const register = async (req: Request, res: Response) => {
  const validationResult = UserRegisterSchema.safeParse(req.body)

  if (!validationResult.success) {
    return res.status(400).json({
      error: 'Validation Error',
      details: validationResult.error.errors
    })
  }

  const { username, textname, password } = validationResult.data

  try {
    const hashedPassword = await bcrypt.hash(password, roundOfSalts)

    const user = userRepository.create({
      username,
      textname,
      password: hashedPassword
    })

    await userRepository.save(user)

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" })
    return res.json({ token })

  } catch (error) {
    console.error('Error registering user:', error)
    return res.status(500).send('Error registering new user')
  }
}

export const login = async (req: Request, res: Response) => {
  const validationResult = UserLoginSchema.safeParse(req.body)

  if (!validationResult.success) {
    return res.status(400).json({
      error: 'Validation Error',
      details: validationResult.error.errors
    })
  }

  const { username, password } = validationResult.data

  try {
    const user = await userRepository.findOne({ where: { username } })

    if (!user) {
      return res.status(401).json({
        fieldErrors: { username: ERR_CODE.USER_DNE }
      })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(401).json({
        fieldErrors: { password: 'Invalid password' }
      })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    res.json({ token })
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

export const logout = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(400).json({ error: 'Token missing' })
  }

  try {
    // token to blacklist
    const blacklistedToken = blacklistedTokenRepository.create({ token })
    await blacklistedTokenRepository.save(blacklistedToken)

    res.status(200).json({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Logout error', error)
    res.status(500).json({ error: 'Logout failed' })
  }
}
