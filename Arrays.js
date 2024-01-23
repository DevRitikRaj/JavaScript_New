const myArr=[1,2,3,4,4];
const hero=["Army", "Navy","Airforce"]
console.log(myArr,hero);
console.log(hero[0])

// ----Some method of the Arrays--------

hero.push(5)  // add in the last or push in the last
console.log(hero);

hero.pop();  // Remove the element in the last
console.log(hero)

hero.unshift(9)   // Add in the first 
console.log(hero);

hero.shift()  // Remove the element in the first position
console.log(hero);

// to check it is available or not 

console.log(hero.includes("Army"));
// to check the index of the element
console.log(hero.indexOf("Airforce"));


// Join means nothing it means to change the datatype into the Stirng

let arrs=[1,2,3,4]
let joins= arrs.join()
console.log( typeof arrs);
console.log( typeof joins);