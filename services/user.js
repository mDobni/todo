const baseServices = require('./base');

module.exports = (globals) => {
  const base = baseServices(globals)('user');

  const save = params => query => body =>
    globals.repositories.user
    .save(params)(query)(body);

  return Object.assign({}, base, {
    create: params => query => body =>
      base._returnActual(save(params)(query)(body))(),

    update: params => query => body =>
      base._returnActual(save(params)(query)(body))(params.id),
  });
};
