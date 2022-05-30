'use strict';
const events = require('events');
const net = require('net');
const channel = new events.EventEmitter();

/**
 * 用事件发射器实现的简单的发布/预订系统
 * eventsDemo 优化, 客户端关闭之后不会继续发送
 * 通过 telnet 127.0.0.1 8888 连接
 */

channel.clients = {};
channel.subscriptions = {};
channel.on('join', (id, client) => {
  channel.clients[id] = client;
  channel.subscriptions[id] = (senderId, message) => {
    if (id != senderId) {
      channel.clients[id].write(message);
    }
  };
  channel.on('broadcast', channel.subscriptions[id]);
});

channel.on('leave', id => {
  channel.removeListener('broadcast', channel.subscriptions[id]);
  channel.emit('broadcast', id, id + ' has left.\n');
});

const server = net.createServer(client => {
  const id = [client.remoteAddress, client.remotePort].join(':');
  console.log('Client connected:', id);

  channel.emit('join', id, client);

  client.on('data', data => {
    data = data.toString();
    channel.emit('broadcast', id, data);
  });

  client.on('close', () => {
    console.log('Client disconnected:', id);
    channel.emit('leave', id);
  });
});
server.listen(8888);
