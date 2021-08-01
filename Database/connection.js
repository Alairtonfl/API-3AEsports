const pg = require('pg');

// INFORMA OS DADOS DO TEU POSTGRES
const client = new pg.Client({
  user: '',
  host: 'localhost',
  password: '',
  database: '',
  port: 5432
}); 

module.exports = client