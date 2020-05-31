console.log(
    greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber"})
);

function greetings(nameArray, jobObj) {
    return `Hello, ${nameArray.join(' ')}! Nice to have a ${jobObj.title} ${jobObj.occupation} around.`;
}