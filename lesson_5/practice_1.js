let arr = ['10', '11', '9', '7', '8'];

let sortedArr = arr.slice().sort((a, b) => {
    return Number(b) - Number(a);
});

console.log(sortedArr);