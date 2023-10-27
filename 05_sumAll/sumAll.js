const sumAll = function(first, second) {
	if (!Number.isInteger(first) || !Number.isInteger(second))
		return "ERROR"
	else if (first<0 || second<0)
		return "ERROR"

	if (first > second) {
		let temp = first
		first = second
		second = temp
	}

	let array = [first]
	let counter = 0
	let sum = first
	
	while (counter != second - 1) {
		array.push(array[counter] + 1)
		sum += array[array.length - 1]
		counter++
	}

	//console.log(array)

	return sum

};


console.log(sumAll(3, 1))


// Do not edit below this line
module.exports = sumAll;
