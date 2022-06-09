const connect = require('connect');
const setup = require('./lib/logger')
const errorHandler = require('./lib/errors');

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}

const app = connect()
    .use(setup(':method :url'))
    .use(hello)
    .use(errorHandler)
    .listen(3000);