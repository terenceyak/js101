console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

function findFibonacciIndexByLength(digits) {
    let iterations = 0;
    while(1) {
        if( String(fibonacci(iterations)).length === digits) {
            return iterations + 1;
        }
        iterations ++;
    }
}


function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}