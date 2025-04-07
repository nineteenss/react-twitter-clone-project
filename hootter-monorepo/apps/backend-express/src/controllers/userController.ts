import { Request, Response } from 'express'
import { userRepository, followRepository } from '../repositories/repo'
import { ERR_CODE } from '../constants/errorStatus'
import { Like } from 'typeorm'
import jwt from 'jsonwebtoken'


// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { user_id } = req.params

  try {
    const user = await userRepository.findOne({
      where: { id: parseInt(user_id) },
      select: ['id', 'username', 'textname']
    });

    if (!user) {
      return res.status(404).json({ error: ERR_CODE.USER_NF });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by token:', error);
    res.status(500).json({ error: ERR_CODE.INTERNAL });
  }
}

export const getSelfId = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.body

    if (!user_id) {
      return res.status(401).json({ error: 'User ID not found in token' })
    }

    const user = await userRepository.findOne({
      where: { id: parseInt(user_id) },
      select: ['id']
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({ user_id: user.id })
  } catch (error) {
    console.error('Error fetching user by token:', error)
    res.status(500).json({ error: 'Internal server error' })
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
