const add = function(num1, num2) {
    let sum = num1 + num2;
    return sum;
};

const subtract = function(num1, num2) {
    let sum = num1 - num2;
    return sum;
};

const sum = function(array) {
    let sum = 0;
    for (num of array){
      sum += num;
    }
    return sum;
};

const multiply = function(array) {
  let sum = 1;
  for (num of array){
    sum *= num;
  }
  return sum;
};

const power = function(num1, num2) {
    return num1**num2;
	
};

const factorial = function(num) {

    let product = 1;
    for(;num>0;num--){
      product *= num;
    }
    return product;
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
