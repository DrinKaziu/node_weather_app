const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New York', (error, data) => {
  console.log(data);
});

forecast(40.7648, -73.9808, (error, forecastData) => {
  console.log(forecastData);
});