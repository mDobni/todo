// ./models/user.js

const Base = require('./base');

function User (data) {
  return Base.create(this, data);
}
User.prototype = Object.assign(User.prototype, Base.prototype);

User.prototype.requiredProperties = [
  'type',
  'content',
];

User.create = data => new User(data);

module.exports = User;
