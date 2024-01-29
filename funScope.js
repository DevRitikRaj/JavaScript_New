



let a=45;
if(true){
    let a=22;
    var b=23;
    const c=24;
    console.log("Inner value is :",a);

}

console.log(a);
// console.log(b); // it will break the rule of the scope in the function
// console.log(c);