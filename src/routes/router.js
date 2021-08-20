const express = require('express');
const routes = express.Router();

const UserController = require('../Controllers//UserController');

routes.get('/users', UserController.index)
routes.post('/users/register', UserController.store)
routes.post('/users/login', UserController.login);

module.exports = routes;