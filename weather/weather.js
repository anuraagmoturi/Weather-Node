const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/f4628a0282b99efb57994a3c06af2ef8/${lat},${lng}`,
    json: true
  }, (error, response, body)=>{
    if(!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else{
      callback('Unable to fetch weather');
    }
  });
};

module.exports = {getWeather};
