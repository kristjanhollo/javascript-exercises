const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
  if (arguments[0] < 0 && arguments[1] < 0) {
    return arguments[0] - arguments[1];
  }
	return arguments[0] - arguments[1];
};

const sum = function(...numbers) {
	return arguments[0].reduce((a, b) => a + b, 0);
};

const multiply = function(...numbers) {
  return arguments[0].reduce((a, b) => a * b, 1);
};

const power = function() {
	return Math.pow(arguments[0], arguments[1]);
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number;

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
