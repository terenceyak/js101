logInBox("To boldly go where no one has gone before!");
function logInBox(text) {
    // edge
    
    const edge = '+-'.concat(Array(text.length).fill('-').join('')).concat('-+');
    const space = '| '.concat(Array(text.length).fill(' ').join('')).concat(' |');
    const textRow = '| '.concat(text).concat(' |');
    console.log(edge);
    console.log(space);
    console.log(textRow);
    console.log(space);
    console.log(edge);
}