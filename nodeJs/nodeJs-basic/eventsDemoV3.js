'use strict';
const fs = require('fs');
const Watcher = require('./lib/watcher');
const watchDir = './watch';
const processedDir = './done';
const watcher = new Watcher(watchDir, processedDir);

/**
 * 监听 watch 文件夹, 将watch 文件夹中的文件移动到 done目录下, 并将文件名改为小写
 */

watcher.on('process', (file) => {
  const watchFile = `${watchDir}/${file}`;
  const processedFile = `${processedDir}/${file.toLowerCase()}`;
  fs.rename(watchFile, processedFile, err => {
    if (err) throw err;
  });
});

watcher.start();
