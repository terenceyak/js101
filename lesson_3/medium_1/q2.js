let munstersDescription = "The Munsters are creepy and spooky.";

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

function swapCase (string) {
  //split to array
  let chars = string.split('');
  // iterate array
  const newChars = chars.map( function (char) {
    // if char is lower case, convert to upper case
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    // if char is upper case, convert to lower case
    } else if (char === char.toLowerCase()) {
      return char.toUpperCase();
    // if char is non an alphabet, just return
    } else {
      return char;
    }
  });

  return newChars.join('');
}

console.log(swapCase(munstersDescription));


/*
munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
*/