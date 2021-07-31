const client = require('../connection');
client.connect();

const query = `
  DROP TABLE IF EXISTS users;
  CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  admin BOOLEAN DEFAULT false,
  name VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)`;

client.query(query, (err) => {
  if (!err) {
    console.log('sucess')
  }
  client.end();
})
