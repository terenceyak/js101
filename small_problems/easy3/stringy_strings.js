console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

function stringy(num) {
    // create an array with length num and fill with 1
    const chars = Array(num).fill(1); 
    // for each odd number index, replace with 0
    return chars.map((char, index) => {
        if(index % 2 !== 0) {
            char = 0;
        }
        return char;
    }).join('');
}