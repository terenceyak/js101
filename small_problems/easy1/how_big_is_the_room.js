const readline = require('readline-sync');
const ONE_SQUARE_METER_IN_FEET = 10.7639;

function prompt (message) {
  console.log(`=> ${message}`);
}

prompt('Enter the length of the room in meters:');

const length = readline.prompt();

prompt('Enter the width of the room in meters:');

const width = readline.prompt();

const areaInMeter = length * width;
const areaInFeet = areaInMeter * ONE_SQUARE_METER_IN_FEET;
prompt(`The area of the room is ${areaInMeter.toFixed(2)} square meters (${areaInFeet.toFixed(2)}).`);
