const http = require('http');
const fs = require('fs');

/**
 * fsDemoV3代码优化
 */

http.createServer((req, res) => {
  getTitles(res);
}).listen(8000, '127.0.0.1');

function getTitles(res) {
  fs.readFile(FileConsts.TITLE_JSON_FILE, (err, data) => {
    if (err) return hadError(err, res);
    getTemplate(JSON.parse(data.toString()), res);
  });
}

function getTemplate(titles, res) {
  fs.readFile(FileConsts.TEMPLATE_HTML_FILE, (err, data) => {
    if (err) return hadError(err, res);
    formatHtml(titles, data.toString(), res);
  });
}

function formatHtml(titles, tmpl, res) {
  const html = tmpl.replace('%', titles.join('</li><li>'));
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end(html);
}

function hadError(err, res) {
  console.error(err);
  res.end('Server Error');
}