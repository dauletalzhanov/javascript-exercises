const reverseString = function(word) {
	array = word.split('')

	output = []


	while (array.length != 0) {
		output.push(array.pop())
	}

	return output = output.join('')

};


// Do not edit below this line
module.exports = reverseString;
