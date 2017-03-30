const user = require('./user.js');

module.exports = globals => ({
  user: user(globals),
});
