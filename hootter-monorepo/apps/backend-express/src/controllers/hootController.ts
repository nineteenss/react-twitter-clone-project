import { CommentSchema, HootSchema } from '@hootter/shared'
import { Request, Response } from 'express'
import { ERR_CODE } from '../constants/errorStatus'
import {
  commentRepository,
  hootRepository,
  rehootRepository,
  userRepository
} from '../repositories/repo'


// Get all existing hoots
export const getHoots = async (req: Request, res: Response) => {
  try {
    const hoots = await hootRepository.find({
      relations: ['user'],
      order: { created_at: 'DESC' }
    })

    const sanitizedHoots = hoots.map(hoot => ({
      id: hoot.id,
      content: hoot.content,
      likes: hoot.likes,
      rehoots: hoot.rehoots,
      comments: hoot.comments,
      created_at: hoot.created_at,
      user_id: hoot.user.id
    }));

    res.json(sanitizedHoots)
  } catch (error) {
    console.error('Error fetching hoots:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Create new hoot from user
export const createHoot = async (req: Request, res: Response) => {
  const validationResult = HootSchema.safeParse(req.body)

  if (!validationResult.success) {
    return res.status(400).json({
      error: 'Validation Error',
      details: validationResult.error.errors
    })
  }

  const { content, user_id } = req.body

  try {
    const user = await userRepository.findOneBy({ id: user_id })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const hoot = hootRepository.create({
      content,
      user
    })

    const savedHoot = await hootRepository.save(hoot)

    res.status(201).json({
      id: savedHoot.id,
      hoot: savedHoot.content,
      user_id: savedHoot.user.id
    })
  } catch (error) {
    console.error('Error creating hoot:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Delete hoot
export const deleteHoot = async (req: Request, res: Response) => {
  const { hoot_id } = req.params

  try {
    const result = await hootRepository.delete(hoot_id)

    if (result.affected === 0) {
      return res.status(401).json({ error: 'Hoot not found' })
    }

    res.status(201).json({ message: "Hoot deleted successfully" })
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
    const hoot = await hootRepository.findOneBy({ id: parseInt(hoot_id) })

    if (!hoot) {
      return res.status(404).json({ error: 'Hoot not found' })
    }

    const updatedHoot = await hootRepository.save({
      ...hoot,
      likes,
      rehoots,
      comments
    })

    res.status(201).json(updatedHoot)
  } catch (error) {
    console.error('Error updating hoot stats:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Add comment
export const addComment = async (req: Request, res: Response) => {
  const validationResult = CommentSchema.safeParse(req.body)

  if (!validationResult.success) {
    return res.status(400).json({
      error: 'Validation Error',
      details: validationResult.error.errors
    })
  }

  const { hoot_id } = req.params
  const { user_id, content } = req.body

  try {
    const user = await userRepository.findOneBy({ id: user_id })
    const hoot = await hootRepository.findOneBy({ id: parseInt(hoot_id) })

    if (!user || !hoot) {
      return res.status(404).json({ error: "User or Hoot not found" })
    }

    const comment = commentRepository.create({
      content,
      user,
      hoot
    })

    const savedComment = await commentRepository.save(comment)

    hoot.comments += 1
    await hootRepository.save(hoot)

    res.status(201).json(savedComment)
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
    const user = await userRepository.findOneBy({ id: user_id })
    const hoot = await hootRepository.findOneBy({ id: parseInt(hoot_id) })

    if (!user || !hoot) {
      return res.status(404).json({ error: "User or Hoot not found" })
    }

    const rehoot = rehootRepository.create({
      user,
      hoot
    })

    const savedRehoot = await rehootRepository.save(rehoot)

    hoot.rehoots += 1
    await hootRepository.save(hoot)

    res.status(201).json(savedRehoot)
  } catch (error) {
    console.error('Error performing rehoot:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Like hoot
export const likeHoot = async (req: Request, res: Response) => {
  const { hoot_id } = req.params

  try {
    const hoot = await hootRepository.findOneBy({ id: parseInt(hoot_id) })

    if (!hoot) {
      return res.status(404).json({ error: "Hoot not found" })
    }

    hoot.likes += 1
    const updatedHoot = await hootRepository.save(hoot)

    res.status(201).json(updatedHoot)
  } catch (error) {
    console.error('Error liking hoot:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}
