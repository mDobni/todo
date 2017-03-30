const Promise = require('bluebird');

const mockUser = (id, body) => (Object.assing({
  id: `${id || Math.ceil(Math.random() * 1000)}`,
  type: 'user',
  content: 'my random User',
}, body));

module.exports = () => ({
  get: ({ id }) => query => body => (!id
  ? Promise.resolve([mockUser(id), mockUser(id + 1)])
  : Promise.resolve([mockUser(id)])),
  save: ({ id }) => query => body => Promise.resolve([1]),
  delete: params => query => body => Promise.resolve([1]),
});
