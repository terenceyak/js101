cleanUp("---what's my +*& line?");    // " what s my line "

function cleanUp(words) {
    const result = words.match(/[a-z]/g);
    console.log(result);
}