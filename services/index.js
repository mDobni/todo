const todo = require('./user.js');

module.exports = globals => ({
  todo: todo(globals),
});

