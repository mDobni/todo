const baseServices = require('./base');

module.exports = (globals) => {
  const base = baseServices(globals)('user');

  return Object.assign({}, base, {
    create: params => query => body =>
      globals.repositories.user
      .save(params)(query)(body)
      .then(([id])) => base.get(({ id })(query)(body)),
    });
};
