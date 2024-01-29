// function myName(){
//     console.log("R");
//     console.log("I");
//     console.log("T");
//     console.log("I");
//     console.log("K");
    
// }
// myName()
// myName()

// function addTwo(one, two){
//     if(one===two){
//         console.log(one+two);

//     }
//     else{
//         console.log("NaNN");
//     }


   
// }

// addTwo(10,10)




// function add(one,two){
//     console.log(one + two);
// }
// const store=add(11,21)
// console.log("Result is: ",store);

function add(one,two){
    let Result=one+two;
    return Result;
}
const store=add(11,21)
console.log("Result is: ",store);

function login(username){

    if(!username){
        console.log("please login");  // we also used username ===undefined
        return;
    }



    return `${username} just logged In`
}
console.log(login(""));