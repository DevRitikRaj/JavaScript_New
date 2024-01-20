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





