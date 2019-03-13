const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for Express config
const publicPath = path.join(__dirname, ('../public'));
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Set up HandleBars and Views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Set up public directory to serve
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Drin Kaziu',
    title: 'Weather App'
  });
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