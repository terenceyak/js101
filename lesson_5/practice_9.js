let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let orderedArray = arr.map(arr => {
    if(typeof arr[0] === 'number') {
        return arr.slice().sort((a, b) => a - b);
    }

    return arr.slice().sort();
});

console.log(orderedArray);