// ./knexfile.js

module.exports = require('./config')(process.env.NODE_ENV).db;

