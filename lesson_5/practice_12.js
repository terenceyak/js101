let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.slice().map(subArr => {
    return subArr.filter(ele => ele % 3 === 0);
});

console.log(newArr);