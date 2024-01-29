



// let a=45;
// if(true){
//     let a=22;
//     var b=23;
//     const c=24;
//     console.log("Inner value is :",a);

// }

// console.log(a);
// console.log(b); // it will break the rule of the scope in the function
// console.log(c);



// function parent(){

//     const username="Ritik Raj";

//     function child(){
//         const web="www.makemypg.com"
//         console.log(username);
//     }

    // console.log(web);

    // child();

    
// }
// parent();



if(true){

    const website="www.ritik.com"
    if(website==="www.ritik.com"){
        const name="Ritik"
        console.log(website+" ",name);
    }
    console.log(website);
}



// =======================================++++++++++++++++++++++++++++++


console.log(addone(5));
function addone(num){
    return num+1;
}





const addTwo=function(num){
    return num+2;
}

console.log(addTwo(2));
