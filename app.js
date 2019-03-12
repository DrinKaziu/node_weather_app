const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

geocode(location, (error, data) => {
  if(!location) {
    console.log('Please provide a location!')
  } else {
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
  }
});

