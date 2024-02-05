// const balance=1000;
// if(balance>500){
//     console.log(balance);
// }
// else if(balance>750){
//     console.log("less than 750")
// }
// else {
//     console.log("Less than 1000");
// }


// condtional like && and OR

const userLogin=true;
const debitCard=true

if(userLogin && debitCard){
    console.log("Allow to course");
}

const userLoginFromGoogle=false;
const userLoginFromEmail=true;

if(userLoginFromEmail || userLoginFromEmail){
    console.log("Allow to the course 2");
}