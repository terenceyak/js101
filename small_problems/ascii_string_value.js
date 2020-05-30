console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0

function asciiValue(string) {
  return string.split('').reduce((sum, current, index) => {
    return sum + string.charCodeAt(index);
  }, 0);
}