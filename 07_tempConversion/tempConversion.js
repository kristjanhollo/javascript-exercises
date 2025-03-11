const convertToCelsius = function(e) {
  return Math.round((e - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(e) {
  return Math.round((e * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
