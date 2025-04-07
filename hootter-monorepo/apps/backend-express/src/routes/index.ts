import express from 'express'
import {
  getHoots,
  createHoot,
  deleteHoot,
  updateHootsStats,
  addComment,
  reHoot,
  likeHoot
} from '../controllers/hootController'
import {
  followUser,
  unfollowUser,
  getUserById,
  getSelfId,
  searchUser,
} from '../controllers/userController';
import { register, login, logout } from '../controllers/authController'
import { authenticate, validate } from '../middleware/auth';

const router = express.Router();

// Auth routes
router.post('/register', register)
router.post('/login', login)
router.post('/logout', authenticate, logout)
router.get('/auth/verify', authenticate, validate)

// Hoot routes
router.post('/hoots', authenticate, createHoot)
router.get('/hoots', authenticate, getHoots)
router.put('/hoots/:hoot_id/stats', authenticate, updateHootsStats)
router.post('/hoots/:hoot_id/comments', authenticate, addComment)
router.post('/hoots/:hoot_id/rehoot', authenticate, reHoot)
router.post('/hoots/:hoot_id/like', authenticate, likeHoot)
router.delete('/hoots/:hoot_id', authenticate, deleteHoot)

// User routes
router.get('/users/me', authenticate, getSelfId)
router.get('/users/:user_id', authenticate, getUserById)
router.post('/users/:user_id/follow', authenticate, followUser)
router.post('/users/:user_id/unfollow', authenticate, unfollowUser)
router.get('/users/search', authenticate, searchUser)

export default router
