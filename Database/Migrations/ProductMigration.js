const client = require('../connection');
client.connect();

// NO TERMINAL DA O COMANDO: NODE CAMINHO DESSE ARQUIVO, FAZ O MSM COM O USERMIGRATION
// PRA CRIAR AS TABELAS NO BANCO
const query = `
  DROP TABLE IF EXISTS products;
  CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  image VARCHAR(500) NOT NULL,
  name VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description VARCHAR(200) NOT NULL,
  price NUMERIC(5,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)`;

client.query(query, (err) => {
  if (!err) {
    console.log('sucess')
  }
  client.end();
})
