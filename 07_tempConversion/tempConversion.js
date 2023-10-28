const convertToCelsius = function(temp) {
  let answer = (temp - 32) / 1.8


  if (Number.isInteger(answer)){
    //console.log(answer + " is an Integer")
    return answer
  }
  else {
    //console.log(answer + "is a float")
    return Number.parseFloat(answer.toFixed(1))
  }
  
};

const convertToFahrenheit = function(temp) {
  let answer = (temp * 1.8) + 32

  if (Number.isInteger(answer)){
    //console.log(answer + " is an Integer")
    return answer
  }
  else {
    //console.log(answer + "is a float")
    return Number.parseFloat(answer.toFixed(1))
  }


};

// console.log(convertToCelsius(32))
// console.log(convertToCelsius(100))
// console.log(convertToCelsius(-100))


// console.log(convertToFahrenheit(0))
// console.log(convertToFahrenheit(73.2))
// console.log(convertToFahrenheit(-10))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
