let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// The output is false. NaN -- not a number --
// is a special numeric value that indicates that an operation that was intended to return a number failed.
// JavaScript doesn't let you use == and === to determine whether a value is NaN.

// to test if value is NaN , can use the isNaN() function