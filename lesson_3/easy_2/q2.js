// slice + reverse
let numbers = [1, 2, 3, 4, 5];
let  reversed = numbers.slice().reverse();
console.log(reversed); // [ 5, 4, 3, 2, 1]
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// sort + spread
numbers = [1, 2, 3, 4, 5];
reversed = [...numbers].sort((num1, num2) => num2 - num1);
console.log(reversed); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// forEach
let reversedArray = [];
numbers.forEach((number) => {
  reversedArray.unshift(number);
});
console.log(reversedArray); // [ 5, 4, 3, 2, 1 ]

// reduce
reversedArray = numbers.reduce((acc, num) => ([num, ...acc]), []);
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]
