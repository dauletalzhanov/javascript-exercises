const add = function(n1, n2) {
	return n1 + n2
}

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arra) {
	suum = 0
	for (let i = 0; i < arra.length; i++) {
		suum += arra[i]
	}
	return suum
	
};

const multiply = function(arra) {
	suum = 1

	for (let i = 0; i < arra.length; i++){
		suum *= arra[i]
	}

	return suum
};

const power = function(n1, n2) {
	return n1 ** n2
};

const factorial = function(n) {
	if (n <= 1 ) {
		return 1
	}

	let nn = n

	return nn * factorial(n - 1)
	
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

console.log(factorial(5))