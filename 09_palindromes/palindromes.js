const palindromes = function (word) {
	let w_o_r_d = word.toLowerCase()
	w_o_r_d = w_o_r_d.split("")
	w_o_r_d = w_o_r_d.filter((i) => ((48 <= i.charCodeAt(0) && i.charCodeAt(0) <= 57) || (97 <= i.charCodeAt(0) && i.charCodeAt(0) <= 122))) //(i.toLowerCase() != i.toUpperCase()))


	//console.log(w_o_r_d)

	let i = 0
	while (i != w_o_r_d.length) {
		if (w_o_r_d[i] != w_o_r_d[w_o_r_d.length - i - 1]) {
			console.log(false)
			return false
		}

		i++

	}
	console.log(true)
	return true

};

// Do not edit below this line
module.exports = palindromes;


palindromes("r3ace3car")
palindromes("Animal loots foliated detail of stool lamina.")
palindromes("A car, a man, a maraca.")
palindromes("Racecar!")
palindromes("racecar!")
palindromes('ZZZZ car, a man, a maracaz.')