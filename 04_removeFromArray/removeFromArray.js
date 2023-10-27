const removeFromArray = function(array, ...args) {

	for (let i = 0; i<args.length; i++){

		if (array.includes(args[i]) != true) {
			continue
		}
		array.splice(array.indexOf(args[i]), 1)
		console.log(array)
	}

	// array = array.join('').split('')

	// console.log(array)

	// for (let i = 0; i<array.length;i++) {
	// 	array[i] = parseInt(array[i])

	// }

	//console.log(array)

	return array

};

//console.log(removeFromArray([1, 2, 3], "1", 3))

// Do not edit below this line
module.exports = removeFromArray;
