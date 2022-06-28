"use strict";

//function defination
//  function takes 2 parameters. A list of numbers and a callback function that gets executed on the list.
function reduceFunction(listofNumbers, callback,initialValue) {
  let result = initialValue;
  for (let index = 0; index < listofNumbers.length; index++) {
    result = callback(result,listofNumbers[index], index, listofNumbers);
  }
  return result;
}
//let us try with the example
const listofNumbers = [1, 2, 3, 4, 5];
let output = 0;

//to find sum
output = reduceFunction(listofNumbers, (sum,num) =>{
    sum+=num;
    return sum;
},0);
console.log(output);

//to find max
output = reduceFunction(listofNumbers, (max,num) =>{
    if(num>max)
        max=num;
    return max;
},0);
console.log(output);


