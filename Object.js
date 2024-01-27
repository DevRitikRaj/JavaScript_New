const tinderuser={}

tinderuser.id="123ab"
tinderuser.name="Ritik"
tinderuser.isLogin=false;

// console.log(tinderuser);

// // obect in Object
// const objectInObject={
//     email:"Some@gmail.com",
//     fullname:{
//         userfullname:"Ritik",
//         lastname:"Raj"

//     }
    
// }
// console.log(objectInObject.fullname.userfullname);


// const obj1={1:"a", 2:"b"}
// const obj2={3:"c", 4:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1, ...obj2}


// console.log(obj3);


console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.entries(tinderuser));
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));
