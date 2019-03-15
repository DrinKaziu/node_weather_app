const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/e79b022885f7770c971c38a56eba6e08/${lat},${long}?units=us`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services.', undefined); 
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      const forecast =  `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees outside. There is a ${response.body.currently.precipProbability}% chance of precipitation`;
      callback(undefined, forecast);
    }
  });
}

module.exports = forecast; 