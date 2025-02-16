//
//  index.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import express from 'express'
import { getHoots, createHoot } from '../controllers/hootController'
import { register, login } from '../controllers/authController'

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/hoots', getHoots)
router.post('/hoots', createHoot)

export default router
