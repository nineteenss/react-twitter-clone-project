//
//  client.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import { Pool } from 'pg'
import { dbConfig } from '../config/database'

export const pool = new Pool(dbConfig)
