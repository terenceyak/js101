console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

function twice(number) {
    if(`${number}`.length % 2 === 0 && isSymmetrical(number)) {
        return number;
    } else {
        return number * 2;
    }
}

function isSymmetrical(number) {
    const numberString = `${number}`;
    const left = numberString.slice(0, numberString.length/2);
    const right = numberString.slice(numberString.length/2, numberString.length);
    return left === right;
}
