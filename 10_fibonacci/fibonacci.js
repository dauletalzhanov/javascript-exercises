const fibonacci = function(n) {
	if (n < 0) {
		return "OOPS"
	}

	if (n <= 2) {
		return 1
	}

	if (isNaN(n)){
		return fibonacci(+n)
	}

	///////////////////////////

	let fib1 = 1
	let fib2 = 1
	let i = 2

	while (i != n) {
		//console.log(fib1, fib2)

		let temp = fib2
		fib2 = fib1 + fib2
		fib1 = temp

		i++
	}

	//console.log(fib1, fib2)

	return fib2

};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(4))
console.log(fibonacci(6))
console.log(fibonacci(10))
console.log(fibonacci(15))
console.log(fibonacci(25))
console.log(fibonacci(-25))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(8))
console.log(fibonacci("8"))