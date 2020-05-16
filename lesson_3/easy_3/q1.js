let numbers = [1, 2, 3, 4];

// Method 1
numbers = [];
// Method 2;
numbers.length = 0;
// Method 3;
numbers.splice(0, numbers.length);
// Method 4;
while (numbers.length) {
  numbers.pop();
}
