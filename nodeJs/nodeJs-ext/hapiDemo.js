const Hapi = require('hapi');
const server = new Hapi.Server({port:8000,host:'localhost'});

server.route({
  method: 'GET',
  path:'/hello',
  handler: (request, reply) => {
    return 'hello world';
  }
});

server.start();