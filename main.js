function calculateMoney(ticketSale) {

if (0 <= ticketSale) {

const securityCost = 500;

const lunchCost = 8 * 50;

const ticketPrice = 120;

const totalSale = ticketPrice * ticketSale;

const totalCost = securityCost + lunchCost;

const remainingBalance = totalSale - totalCost;

return remainingBalance;

} else {

return "Please enter a valid number";

}

}

function checkName(name) {

const givenLetter = ["a", "y", "i", "e", "o", "u", "w"];

const lastLetter = name[name.length - 1];

if (typeof name !== "string") {

return "invalid";

}

if (givenLetter.includes(lastLetter.toLowerCase())) {

return "Good Name";

} else {

return "Bad Name";

}

}

function deleteInvalids(array) {

let newArray = [];

if (Array.isArray(array)) {

for (let i = 0; i < array.length; i++) {

if (typeof array[i] === "number" && !isNaN(array[i])) {

newArray.push(array[i]);

}

}

return newArray;

} else {

return "Please enter valid Array";

}

}

function password(obj) {

const reqProp = ["name", "birthYear", "siteName"];

for (const prop of reqProp) {

if (obj[prop] === undefined || obj[prop] === null) {

return "invalid";

}

}

const Name = obj.name;

const Year = obj.birthYear;

const Site = obj.siteName;

const firstLetterInUpperCase = Site[0].toUpperCase() + Site.slice(1);

if (Year >= 1000 && Year <= 9999) {

let Password = ${firstLetterInUpperCase}#${Name}@${Year};

return Password;

} else {

return "invalid";

}

}

function monthlySavings(arr, livingCost) {

if (typeof arr !== "array" && typeof livingCost !== "number") {

return "invalid input";

}

let totalPayment = 0;

for (let i = 0; i < arr.length; i++) {

if (arr[i] >= 3000) {

arr[i] -= arr[i] * 0.2;

}

totalPayment += arr[i];

}

const saving = totalPayment - livingCost;

if (saving >= 0) {

return saving;

} else {

return "earn more";

}

}