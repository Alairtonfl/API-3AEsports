const pg = require('pg');

// INFORMA OS DADOS DO TEU POSTGRES
const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  password: 'admin',
  database: '3AEsports',
  port: 5432
}); 

module.exports = client