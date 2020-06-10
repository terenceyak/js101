let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr = arr.slice().sort((a, b) => {
    let oddSumA = a.filter(ele => ele % 2 !== 0).reduce((acc, currVal) => acc + currVal, 0);
    let oddSumB =  b.filter(ele => ele % 2 !== 0).reduce((acc, currVal) => acc + currVal, 0);
    return  oddSumA - oddSumB;
});

console.log(newArr);