const pg = require('pg');

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  password: 'admin',
  database: '3AEsports',
  port: 5432
}); 

module.exports = client