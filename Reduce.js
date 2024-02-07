const mynums=[1,2,3]

// const myTotal=mynums.reduce(function (acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc +curval;
// },0)
// console.log(myTotal);

const myTotal=mynums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);

const ShopingCart=[

    {
        itemName:"Js Course",
        price:3999,
    },

    {
        itemName:"Java Course",
        price:1999,
    },

    {
        itemName:"Python Course",
        price:999,
    },


]
const Cart=ShopingCart.reduce( (acc,item)=> acc+item.price,0)
console.log(Cart);