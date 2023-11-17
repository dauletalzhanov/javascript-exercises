const findTheOldest = function(array) {
	let maxAge = 0
	let maxName = ""

	for (let i = 0; i < array.length; i++) {
		let age = 0
		if ("yearOfDeath" in array[i]) {
			//console.log(array[i].yearOfBirth - array[i].yearOfDeath)
			age = array[i].yearOfDeath - array[i].yearOfBirth
			//console.log(age)
		} else {
			age = 2023 - array[i].yearOfBirth
		}

		if (age > maxAge) {
			maxAge = age
			maxName = i
			console.log(array[i].name)
		}
	}

	return array[maxName]


};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people))