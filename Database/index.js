const Sequelize = require('sequelize');
const database = require('../src/config/connection');

const User = require('../src/models/User');

const conn = new Sequelize(database);

User.init(conn);;

module.exports = conn;