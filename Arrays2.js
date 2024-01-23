const one_arr=["one","two","three"];
const two_arr=["four","five","six"];
 

// Using Push Operation    [ 'one', 'two', 'three', [ 'four', 'five', 'six' ] ]
// one_arr.push(two_arr)
// console.log(one_arr);

// Using Concat function   [ 'one', 'two', 'three', 'four', 'five', 'six' ]
// const concats=one_arr.concat(two_arr)
// console.log(concats);



//Using Spread Operator    [ 'one', 'two', 'three', 'four', 'five', 'six' ]
// const spread_operator= [...one_arr, ...two_arr]
// console.log(spread_operator);


//Using "from" and "of"....
// const name="Ritik"

console.log(Array.isArray("Ritik"));
console.log(Array.from("Ritik"));
console.log(Array.from({name:"Ritik"}))

let score1=123
let score2=321
let score3=234
console.log(Array.of(score1,score2,score3));
