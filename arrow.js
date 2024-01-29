const user={
    username:"Ritik",
    price:166,
    welcome: function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this);

    }

}
// user.welcome()
// user.username="Pk"
// user.welcome()

// function chai(){
//     let name="Ritik"
//     console.log(this);

// }
// chai()

// const chai=function(){
//     let username="Raj"
//     console.log(this.username);
// }
// chai()

// ----------------Arrow Function-----------------

// const addTwo= (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(1,2));

  // We can also written as

// const addTwo= (num1,num2)=> num1+num2;


// console.log(addTwo(1,2));

const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(1,4));

