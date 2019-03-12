const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (error, data) => {
  if (error) {
    console.log(error)
  } else {
    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`${data.location}:`);
        console.log(forecastData);
      }
    });
  }
});

