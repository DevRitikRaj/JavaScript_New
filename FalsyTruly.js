const UserEmail="0"

if(UserEmail){
    console.log("Got User Email");
}
else{
    console.log("Don't have user email");
}

// Some falsy values ------
// false ,0 ,-0,, BigInt 0n, "", null, undefined,NaN

// Some Truly value

// "0", 'false', " ", [],{},function(){}

// Nullish Coalescing Operator (??) : null underdefined

let val1;

val1=5 ?? 10;
val2=null ?? 10;
val3=null ?? 10 ?? 25;
console.log(val1);
console.log(val2);
console.log(val3);


// Ternary Operator

const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("Less than 80") : console.log("More Than 80");;

