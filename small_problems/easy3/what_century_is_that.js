console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

function century(year) {
    const centuryNo = Math.ceil(year/100);
    return getOrdinal(centuryNo);
}


function getOrdinal(number) {
    let s=["th","st","nd","rd"],
    v=number%100;
    return number+(s[(v-20)%10]||s[v]||s[0]);
}
 