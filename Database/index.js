const Sequelize = require('sequelize');
const database = require('../config/connection');

const User = require('../src/Users/Entities/User');
const Product = require('../src/Products/Entities/Product');

const conn = new Sequelize(database);

User.init(conn);
Product.init(conn)

module.exports = conn;