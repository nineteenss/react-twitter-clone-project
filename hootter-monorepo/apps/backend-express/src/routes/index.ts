//
//  index.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import express from 'express'
import { getHoots, createHoot } from '../controllers/hootController'

const router = express.Router();

router.get('/hoots', getHoots)
router.post('/hoots', createHoot)

export default router
