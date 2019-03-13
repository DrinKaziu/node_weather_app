const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This will be the home page');
});

app.get('/about', (req, res) => {
  res.send('This will be the about page');
});

app.get('/help', (req, res) => {
  res.send('This will be the help page');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});