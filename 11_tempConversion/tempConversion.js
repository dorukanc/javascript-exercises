const convertToCelsius = function(temp) {
    const celc = Math.round((temp - 32) * 5/9 * 10) / 10;
    return celc;

};

const convertToFahrenheit = function(temp) {
  const fahrenheit = Math.round((temp * 9/5 * 10)) / 10 + 32;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
