'use strict';
const net = require('net');

/**
 * 建立socket连接,并打印通讯数据
 * 通过telnet 127.0.0.1 8888连接测试
 */

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    socket.write(data);
  });
});
server.listen(8888);
