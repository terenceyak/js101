console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function penultimate(string) {
    const words = string.split(' ');
    return words[words.length - 2];
}