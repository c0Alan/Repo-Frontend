const fs = require('fs');
const zlib = require('zlib');

/**
 * 压缩文件
 */
const gzip = zlib.createGzip();
const outStream = fs.createWriteStream('output.gz');
fs.createReadStream('./static/file.txt')
    .pipe(gzip)
    .pipe(outStream);
