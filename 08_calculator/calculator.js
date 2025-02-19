const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => {return sum + num}, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => {return product * num}, 1);
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
  const arr = [...Array(a).keys()].map(x => ++x);
  return multiply(arr);
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
