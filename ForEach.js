// const sub=["js","java","ruby","Python"]
// sub.forEach(function (items){
//     console.log(items);
// })


/// by Refernce

// function printMe(item){
//     console.log(item);
// }
// sub.forEach(printMe)


// sub.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

myCoding.forEach( (items)=>{

    console.log(items.languageName);

})



