triangle(9);

function triangle(n) {
    // for each row
        // for each column
            // print n - row + 1 spaces, with row + 1 *
    for(let i = 0; i < n; i++) {
        let ret = '';
        for(let j = 0; j < n - i + 1; j++) {
            ret = ret.concat(' ');
        }

        for(let k = 0; k < i + 1; k++) {
            ret = ret.concat('*');
        }
    
        console.log(ret);
    }
}