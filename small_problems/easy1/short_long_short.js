console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

function shortLongShort(string1, string2) {
  const sortedString = sortString([string1, string2]);
  return sortedString[0].concat(sortedString[1]).concat(sortedString[0]);
}

function sortString(stringArray) {
  return stringArray.sort((a, b) => a.length - b.length);
}