const client = require('../../Database/connection.js');
const express = require('express');
const app = express();
const sha1 = require('sha1');
const router = express.Router();

// MOSTRA O LOG DE CADA REQUISIÇÃO FEITA PARA A API
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

// RETORNA A LISTA DE TODOS OS PRODUTOS CADASTRADOS
router.get('/', (req, res) => {
  client.query(`Select * from products`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
})

// RETORNA UM UNICO ITEM, PASSANDO UM ID POR REQUISICAO GET 
router.get('/:id', (req, res) => {
  client.query(`Select * from products WHERE id = '${req.params.id}'`, (err, result) => {
    if (result.rowCount) {
      res.send(result.rows);
    } else {
      res.send('Produto inexistente')
    }
  });
  client.end;
})


// INSERE UMM PRODUTO NA TABELA PASSANDO UMA REQUISICAO POST
// SEGUINTES PARAMETROS NAME, CATEGORY, PRICE
router.post('/add', (req, res) => {
  const product = req.body;
  let insertQuery = `insert into products(name, category, price) values ('${product.name}', '${product.category}', '${product.price}')`
  client.query(insertQuery, (err, result) => {
    if(!err){
      res.send('Sucess')
    } else {
      console.log(err.message)
    }
    client.end;
  })
})

module.exports = router;