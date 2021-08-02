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

client.connect();

// RETORNA ID, NOME E EMAIL DE TODOS OS USUARIOS CADASTRADOS NO BANCO
router.get('/', (req, res) => {
  client.query(`Select id, name, email from users`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
})

// REGISTRO DE USUARIO, RECEBE COMO PARAMETRO UMA REQUISIÇAO DE FORMULARIO DO TIPO POST
// SEGUINTES PARAMETROS NAME, EMAIL E PASSWORD
// RETORNA SUCCESSO SE O INSERT FOR EXECUTADO COM EXITO E ERRO SE O EMAIL(CHAVE UNICA) JA ESTIVER CADASTRADO NO BANCO
router.post('/register', (req, res) => {
  const user = req.body;
  let insertQuery = `insert into users(name, email, cpf, password) values ('${user.name}', '${user.email}', '${user.cpf}','${sha1(user.password)}')`
  client.query(insertQuery, (err, result) => {
    if(!err){
      res.send(true)
    } else {
      res.send(false)
    }
    client.end;
  })
})


// RECEBE COMO PARAMETRO UMA REQUISIÇAO DO TIPO POST
// RETORNA TRUE SE FOR ENCONTRADO ALGUM USUARIO COM O EMAIL E SENHA INFORMADOS
router.post('/login', (req, res) => {
  const user = req.body;
  let query = `Select name, email from users WHERE email = '${user.email}' AND password = '${sha1(user.password)}'`
  client.query(query, (err, result) => {
    if(!err){
      if(result.rowCount == 1){
        res.send(true)
      } else{
        res.send(false)
      }
    }
    client.end;
  })
})


module.exports = router;