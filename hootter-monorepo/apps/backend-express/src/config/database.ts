//
//  database.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

export const dbConfig = {
  user: process.env.DB_USER || 'username',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'hootter',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5432', 10)
}
