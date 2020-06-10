let obj = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let itemDetails = Object.values(obj);

let retArr = itemDetails.map(item => {
    if (item.type === 'fruit') {
        return item.colors.map(color => {
            return color.charAt(0).toUpperCase() + color.slice(1);
        });
    } else if (item.type === 'vegetable') {
        return item.size.toUpperCase();
    }
});

console.log(retArr);