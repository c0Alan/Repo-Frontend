const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const articles = [{ title: 'Example' },{ title: 'Example2' },{ title: 'Example3' }];

/**
 * 实现 restful crud
 */

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/articles', (req, res) => {
  res.send(articles);
});

app.post('/articles', (req, res) => {
  const article = { title: req.body.title };
  articles.push(article);
  res.send(article);
});

app.get('/articles/:id', (req, res) => {
  const id = req.params.id;
  console.log('Fetching:', id);
  res.send(articles[id]);
});

app.delete('/articles/:id', (req, res) => {
  const id = req.params.id;
  console.log('Deleting:', id);
  delete articles[id];
  res.send({ message: 'Deleted' });
});

app.listen(app.get('port'), () => {
  console.log('App started on port', app.get('port'));
});

module.exports = app;
