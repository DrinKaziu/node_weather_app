const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
  res.render('about', {
    name: 'Drin Kaziu',
    title: 'About',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    name: 'Drin Kaziu', 
    title: 'Help', 
    message: 'What can I help you with?'
  });
});

app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: 'Please provide a location.'
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({error});
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({error});
      }

      res.send({
        location: location,
        forecast: forecastData,
        address: req.query.address
      });
    });
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    name: 'Drin Kaziu', 
    title: '404', 
    errorMessage: 'Help Article not found'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    name: 'Drin Kaziu', 
    title: '404', 
    errorMessage: 'Page Not Found'
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});