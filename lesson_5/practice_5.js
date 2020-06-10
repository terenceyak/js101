let munsters = {
    Herman: { age: 32, gender: 'male' },
    Lily: { age: 30, gender: 'female' },
    Grandpa: { age: 402, gender: 'male' },
    Eddie: { age: 10, gender: 'male' },
    Marilyn: { age: 23, gender: 'female'}
};

let memberDetails = Object.values(munsters);

let totalMaleAge = memberDetails.filter(member => member.gender === 'male').reduce((acc, currValue) => {
    return acc + currValue.age;
}, 0);
