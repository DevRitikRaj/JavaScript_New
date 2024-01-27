const mySum=Symbol("key1")

const details={
     name: "ritik",
      age: 15,
      location:"muz",
      [mySum]: "key123"

}
// console.log(details.age);
// console.log(details["age"]);
// console.log( typeof details[mySum]);

// details.name="rishu"
// Object.freeze(details)
// details.name="prakash"
// console.log(details);

details.greeting=function(){
    console.log("Hello JS USer");
}
console.log(details.greeting());

// call from the variable----

details.greeting2=function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(details.greeting2());