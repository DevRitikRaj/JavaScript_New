// const nums=[1,2,3,4,5]
// const NewNums=nums.map( (nums)=> nums+10 )
// const NewNums=nums.map( (nums) =>{return nums+10} )
// const NewNums=nums.forEach(  (nums)=>{
    // console.log(nums+10);
// } )


const myNums=[1,2,3,4,5,6,7,8,9,10]

const NewValue=myNums

                 .map(  (my)=>my*10)
                 .map(  (my) => my+1)
                 .filter((my) =>my>=40 )
console.log(NewValue);