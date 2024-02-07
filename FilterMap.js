const myNums=[1,2,3,4,5,6,7,8,9,10]

// const NewNums=myNums.filter( (nums) => nums>4)
// console.log(NewNums);

// const Value=myNums.filter(  (nums)=>{
    //  return nums>4;  // When we use in function to always return fuction is use
// } )
// console.log(Value);

//By Using the ForEach Loop

const newNums=[];

myNums.forEach(  (nums)=>{
    if(nums>4){
        newNums.push(nums)
    }
})
console.log(newNums);
