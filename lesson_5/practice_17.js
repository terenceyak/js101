function generateUUID() {
    let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let sections = [8, 4, 4, 4, 12];

    let uuid = ''
    sections.forEach((section, sectionIndex) => {
        for(let index = 1; index <= section; index ++) {
            let randomIndex = Math.floor(Math.random() * chars.length);
            uuid += chars[randomIndex];
        }

        if(sectionIndex < sections.length - 1) {
            uuid +='-';
        }
    });

    return uuid;
}

console.log(generateUUID());
console.log(generateUUID());