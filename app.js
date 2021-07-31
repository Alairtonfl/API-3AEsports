const express = require('express');
const app = express();
const users = require('./src/Controllers/UserController.js')
const products = require('./src/Controllers/ProductController.js')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

app.use('/users', users);
app.use('/products', products);

