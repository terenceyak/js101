let numbers = [1, 2, 3];
numbers[6] = 5; //It doesn't raise an error. The JavaScript engine will treat array slots 3 through 5 as empty slots.

//numbers[4]  outputs undefined, but slot is empty, does not
// have value, not even undefined

// note that if you use map(), new array will also have empty slots
// if the slot was undefined, new array will be remapped based on value of
// call back

// continuing from above,
// numbers[5] = undefiend
// numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
// numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]
