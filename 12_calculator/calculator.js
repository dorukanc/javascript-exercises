const add = function(a, b) {
	return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((prev, value) => prev += value, 0) || 0;
};

const multiply = function(arr) {
  return arr.reduce((prev, value) => prev * value);
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
  let factorial = 1;
  while(a > 0){
    factorial *= a;
    a--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
