import { Request, Response } from 'express'
import { userRepository, followRepository } from '../repositories/repo'
import { ERR_CODE } from '../constants/errorStatus'
import { Like } from 'typeorm'


// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { user_id } = req.params

  try {
    const user = await userRepository.findOne({
      where: { id: parseInt(user_id) },
      select: ['username', 'textname']
    })

    if (!user) {
      return res.status(404).json({ error: ERR_CODE.USER_NF })
    }

    res.status(201).json(user)
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Follow user
export const followUser = async (req: Request, res: Response) => {
  const { follower_id, followed_id } = req.body

  try {
    const follower = await userRepository.findOneBy({ id: follower_id })
    const followed = await userRepository.findOneBy({ id: followed_id })

    if (!follower || !followed) {
      return res.status(404).json({ error: ERR_CODE.USER_NF })
    }

    const follow = followRepository.create({
      follower,
      followed
    })

    const savedFollow = await followRepository.save(follow)

    res.status(201).json(savedFollow)
  } catch (error) {
    console.error('Error following user:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}

// Unfollow user
export const unfollowUser = async (req: Request, res: Response) => {
  const { follower_id, followed_id } = req.body

  try {
    const result = await followRepository.delete({
      follower: { id: follower_id },
      followed: { id: followed_id }
    })

    if (result.affected === 0) {
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
    const users = await userRepository.find({
      where: {
        username: Like(`%${query}%`)
      },
      select: ['id', 'username', 'textname']
    })

    res.status(201).json(users)
  } catch (error) {
    console.error('Error searching user:', error)
    res.status(500).json({ error: ERR_CODE.INTERNAL })
  }
}
