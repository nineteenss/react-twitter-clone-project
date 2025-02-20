//
//  helper.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 17.02.2025
//


/// NOTE: replace the manual queries with ORM tools
async function databaseCheckCreate(param) {
  // Connection test
  await param.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database', err)
    } else {
      console.log('Connected to the database @', res.rows[0].now)
    }
  })

  // Create 'users' table
  await param.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      textname VARCHAR(100) NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create 'hoots' table
  await param.query(`
    CREATE TABLE IF NOT EXISTS hoots (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      content TEXT NOT NULL,
      likes INTEGER DEFAULT 0,
      rehoots INTEGER DEFAULT 0,
      comments INTEGER DEFAULT 0,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create 'comments' table
  await param.query(`
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      hoot_id INTEGER REFERENCES hoots(id),
      user_id INTEGER REFERENCES users(id),
      content TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create 'rehoots' table
  await param.query(`
    CREATE TABLE IF NOT EXISTS rehoots (
      id SERIAL PRIMARY KEY,
      hoot_id INTEGER REFERENCES hoots(id),
      user_id INTEGER REFERENCES users(id),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create 'follows' table
  await param.query(`
    CREATE TABLE IF NOT EXISTS follows (
      id SERIAL PRIMARY KEY,
      follower_id INTEGER REFERENCES users(id),
      followed_id INTEGER REFERENCES users(id),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(follower_id, followed_id)
    )
  `)

  // Create 'blacklisted tokens' table
  await param.query(`
    CREATE TABLE IF NOT EXISTS blacklisted_tokens (
      id SERIAL PRIMARY KEY,
      token TEXT UNIQUE NOT NULL,
      blacklisted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `)
}

export default databaseCheckCreate
