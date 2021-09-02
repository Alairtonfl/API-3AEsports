const express = require('express');
const routes = express.Router();

const UserController = require('../Users/Controllers/UserController');
const ProductController = require('../Products/Controllers/ProductController')
const isAdmin = require('../Products/Middleware/IsAdmin');

routes.get('/users', UserController.index)
routes.post('/users/register', UserController.store)
routes.post('/users/login', UserController.login);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.selectById);
routes.put('/products/:id', isAdmin.isAdmin, ProductController.updateById);
routes.delete('/products/:id', ProductController.deleteById);

module.exports = routes;