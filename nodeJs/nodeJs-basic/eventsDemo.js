// 'use strict';
const events = require('events');
const net = require('net');
const channel = new events.EventEmitter();

/**
 * 用事件发射器实现的简单的发布/预订系统
 * 客户端关闭之后还会继续发送
 * 通过 telnet 127.0.0.1 8888 连接
 */

channel.clients = {};
channel.subscriptions = {};

channel.on('join', (id, client) => {
    console.log(channel.clients);
    channel.clients[id] = client;
    channel.subscriptions[id] = (senderId, message) => {
        if (id != senderId) {
            console.log(id + ":send:" + message)
            channel.clients[id].write(message);
        }
    };
    channel.on('broadcast', channel.subscriptions[id]);
});

const server = net.createServer(client => {
    const id = `${client.remoteAddress}:${client.remotePort}`;
    channel.emit('join', id, client);

    client.on('data', data => {
        console.log(id + ":receive:" + data)
        data = data.toString();
        channel.emit('broadcast', id, data);
    });
    console.log("client.on:"+id);
});
server.listen(8888);
