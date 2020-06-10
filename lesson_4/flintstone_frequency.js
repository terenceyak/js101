let statement = "The Flintstones Rock";

let chars = statement.split('').filter(char => char !== ' ');

let frequencyObj = {};

chars.forEach(char => {
    frequencyObj[char] = frequencyObj[char] || 0
    frequencyObj[char] += 1;
});

console.log(frequencyObj);