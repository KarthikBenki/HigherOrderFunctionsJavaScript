//filter is a finctions which filters array elements according to logic provided to filter and returns the new array

let arr = [1, 2, 3, 4, 5, 6];

let output = arr.filter(function (x) {
  //to return even numbers
  return x % 2 == 0;
});

console.log(output);

output = arr.filter((x) => x > 3);
console.log(output);