let ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
};

let agesArr = Object.values(ages);

let ageSum = agesArr.reduce((acc, currVal) => {
    return acc + currVal;
}, 0);

console.log(ageSum);