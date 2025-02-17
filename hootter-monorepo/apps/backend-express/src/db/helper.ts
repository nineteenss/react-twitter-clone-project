//
//  helper.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 17.02.2025
//

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
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create 'hoots' table
  await param.query(`
    CREATE TABLE IF NOT EXISTS hoots (
      id SERIAL PRIMARY KEY,
      content TEXT NOT NULL,
      user_id INTEGER REFERENCES users(id),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create 'blacklisted tokens' table
  await param.query(`
    CREATE TABLE IF NOT EXISTS blacklisted_tokens (
      id SERIAL PRIMARY KEY,
      token TEXT UNIQUE NOT NULL,
      blacklisted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)
}

export default databaseCheckCreate
