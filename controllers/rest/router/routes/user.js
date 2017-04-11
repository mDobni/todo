module.exports = globals => [
  {
    description: 'Get all users',
    method: 'get',
    route: '/user',
    cb: (params, query, body) => globals.services.user.get(params)(query)(body),
  },
  {
    description: 'Get a user',
    method: 'get',
    route: '/user/:id',
    cb: (params, query, body) => globals.services.user.get(params.id)(query)(body),
  },
  {
    description: 'Create a user',
    method: 'post',
    route: '/user',
    cb: (params, query, body) => globals.services.user.post(params)(query)(body),
  },
  {
    description: 'Modify a user',
    method: 'put',
    route: '/user/:id',
    cb: (params, query, body) => globals.services.user.put(params)(query)(body),
  },
  {
    description: 'Delete a user',
    method: 'delete',
    route: '/user/:id',
    cb: (params, query, body) => globals.services.user.delete(params)(query)(body),
  },
];
