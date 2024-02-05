//  for (let i = 0; i <=5; i++) {
//     const element = i;
//     if(element==5){
//         console.log("My 5");

//     }
//     console.log(element);
   
    
//  }

 // Loop in the Loop

//  for (let i = 1; i <=10; i++) {
//     console.log(`Outer loop value :${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
    
//  }



 // break and Continue


 for (let i = 0; i <=10; i++) {
    if(i==5){
        console.log("Detect the 5");
        // break;
        continue;
    }
    console.log(`Value of i is ${i}`);
    
 }


//  While Loop
let myArray=["Flash", "Batman", "Superman"]
// let arr=0
// while(arr<myArray.length){
//     console.log(`value is ${myArray[arr]}`)
//     arr=arr+1;
// }


// do-while Loop
let score =11;
do {
    console.log(`Score is ${score}`);
    score++;
    
} while (score<=10);

