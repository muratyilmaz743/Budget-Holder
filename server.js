const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist')));

app.post('/posts');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
  console.log('Running. On port ${port}');
})
