//
//  index.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import express from 'express'
import { getHoots, createHoot } from '../controllers/hootController'
import { register, login, logout } from '../controllers/authController'
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.post('/logout', authenticate, logout)
router.get('/hoots', authenticate, getHoots)
router.post('/hoots', authenticate, createHoot)

export default router
