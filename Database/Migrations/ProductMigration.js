const client = require('../connection');
client.connect();

const query = `
  DROP TABLE IF EXISTS products;
  CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  price NUMERIC(5,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)`;

client.query(query, (err) => {
  if (!err) {
    console.log('sucess')
  }
  client.end();
})
