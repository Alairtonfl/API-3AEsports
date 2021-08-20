const express = require('express');
const app = express();
const routes = require('./src/routes/router');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./Database/index');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());

// INICIA O SERVER COM NODE .\APP.JS
app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

app.use(routes);


