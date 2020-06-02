console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

function crunch(string) {
    // split chars
    const chars = string.split('');
    // iterate array
    const ret = chars.filter((item, index) => {
        // if consecutive exclude from array
        item !== chars[index+1];
    });
    
    return ret.join(''); // join array
    
}