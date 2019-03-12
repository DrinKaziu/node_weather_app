const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New York', (error, data) => {
  console.log(data);
});