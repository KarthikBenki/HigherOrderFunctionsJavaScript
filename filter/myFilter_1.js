"use strict";

//function defination
//  function takes 2 parameters. A list of numbers and a callback function that gets executed on the list.
function filterFunction(listofNumbers, callback) {
  let resultArray = [];
  let result = "";
  for (let index = 0; index < listofNumbers.length; index++) {
    result = callback(listofNumbers[index], index, listofNumbers);
    if (result) {
      resultArray.push(listofNumbers[index]);
    }
  }
  return resultArray;
}
//let us try with the example
const listofNumbers = [1, 2, 3, 4, 5];
let outputArray = [];

//to find odd numbers
outputArray = filterFunction(listofNumbers, (num) => num%2);
console.log(outputArray);

//to find even numbers
outputArray = filterFunction(listofNumbers, (num) => num%2==0);
console.log(outputArray);

//to find  numbers < 4
outputArray = filterFunction(listofNumbers, (num) => num < 4);
console.log(outputArray);
