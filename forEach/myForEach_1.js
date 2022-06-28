"use strict";

//function defination
//  function takes 2 parameters. A list of numbers and a callback function that gets executed on the list.
function forEachFunction(listofNumbers, callback) {
  let result = "";
  for (let index = 0; index < listofNumbers.length; index++) {
    result = callback(listofNumbers[index], index, listofNumbers);
  }
}
//let us try with the example
const listofNumbers = [1, 2, 3, 4, 5];


//to find binary equivalent
forEachFunction(listofNumbers, (num) =>{
    console.log(num.toString(2));
} );


