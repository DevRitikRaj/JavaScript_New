const name="     Ritik"
const lastName="Raj"
const fullName=name+lastName;
// console.log(fullName);
console.log(`My name is ${fullName.toLowerCase()}`)
console.log(fullName.toUpperCase())
console.log(fullName.charAt(2)); // to check which position
console.log(fullName.indexOf('i')) // TO check which position

console.log(fullName.slice(0,4))
console.log(fullName.substring(0,4))
console.log(fullName);
console.log(fullName.trim());
const url="https://www.ritik%20Raj.com"
const replaced=url.replace('%20', '-')
console.log(replaced);
console.log(name.includes('Ritik'))


// split the values
console.log(replaced.split('.'))


// Feature                Argument swapping                Negative indices
// substring()               Yes                               Treated as 0
// slice()                     No                               Counted from the end of the string

// Lecture 12

const num=100.24;
console.log(num.toFixed(0))
console.log(num.toPrecision(3))
const number=1000000;
console.log(number.toLocaleString('en-IN'));

// -------------------------Maths-------------------------

// console.log(Math)
// console.log(Math.abs(-2));
// console.log(Math.round(3.5))
// console.log(Math.ceil(4.2));
// console.log(Math.floor(5.9));
// console.log(Math.max(1,2,3));
// console.log(Math.min(1,2,3))


// Random Values

console.log(Math.random())
console.log(Math.random()*10 +1)
console.log(Math.floor(Math.random()*10 +1))

const min =10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1))+min)












