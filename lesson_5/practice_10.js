let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let orderedArray = arr.map(arr => {
    return arr.slice().sort((a, b) => {
        if(typeof a === 'number') {
            return b - a;
        }

        if ( a < b ) {
            return 1;
        } else if ( a > b) {
            return -1;
        } else {
            return 0;
        }
    });
});

console.log(orderedArray);