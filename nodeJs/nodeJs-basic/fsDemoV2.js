const http = require('http');
const fs = require('fs');
const FileConsts = require('./consts/FileConsts');

console.log(FileConsts.TITLE_JSON_FILE);

/**
 * 获取JSON文件中的标题并渲染Web页面
 */
http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile(FileConsts.TITLE_JSON_FILE, (err, data) => {
            if (err) {
                console.error(err);
                res.end('Server Error');
            }

            const titles = JSON.parse(data.toString());
            fs.readFile(FileConsts.TEMPLATE_HTML_FILE, (err, data) => {
                if (err) {
                    console.error(err);
                    res.end('Server Error');
                }

                const tmpl = data.toString();
                const html = tmpl.replace('%', titles.join('</li><li>'));
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(html);

            });

        });
    }
}).listen(8000, '127.0.0.1');
