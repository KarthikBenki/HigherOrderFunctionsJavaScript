"use strict";

//function defination
//  function takes 2 parameters. A list of numbers and a callback function that gets executed on the list.
function mapFunction(listofNumbers, callback) {
  let resultArray = [];
  let result = "";
  for (let index = 0; index < listofNumbers.length; index++) {
    result = callback(listofNumbers[index], index, listofNumbers);
    resultArray.push(result);
  }
  return resultArray;
}
//let us try with the example
const listofNumbers = [1, 2, 3, 4, 5];
let outputArray = [];

//to find string equivalent
outputArray = mapFunction(listofNumbers, (num) => num.toString());
console.log(outputArray);

//to find binay equivalent
outputArray = mapFunction(listofNumbers, (num) => num.toString(2));
console.log(outputArray);

//to find cube of numbers
outputArray = mapFunction(listofNumbers, (num) => num**3);
console.log(outputArray);
