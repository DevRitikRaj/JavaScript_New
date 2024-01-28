// to use rest operator in the function

function cartcalculater(...num1){
    return num1;

}
console.log(cartcalculater(2,222,222233));  //to convert into the array


// function call the Object

const user={
    username:"Ritik",
    password:"1999"
}

function funObj(anyobj){
    console.log(`My name is ${anyobj.username} and my password is ${anyobj.password}`);
}
funObj(user)



// Object call in the  function

const newArray=[200,145,250]

function returnarraysecond(getarray){
    return getarray[1]
}
// console.log(returnarraysecond(newArray));
console.log(returnarraysecond([1,2,3]));


