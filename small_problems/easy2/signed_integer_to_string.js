console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");


function signedIntegerToString(int) {
    const sign = Math.sign(int);
    let ret;
    switch (sign) {
        case 1:
            ret = '+'.concat(integerToString(int));
            break;
        default:
            ret = integerToString(int);
            break;
    }
    return ret;
}

function integerToString(int) {
    return `${int}`
}