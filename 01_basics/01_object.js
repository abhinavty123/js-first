//singleton
//Object.create

//object literals

const mysym=Symbol("key1")

const jsUser ={
    name: "hitesh",
    "full name"= "abhinav tyagi",
    [mysym]="mykey1",
    age: 18,
    location: "jaipur",
    email: "abhinavty1@gmail.com"

}

// key is always a string

console.log(jsUser.email)
console.log(jsUser["email"])
// right way to use symbol
console.log(jsUser.[mysym])

jsUser.email ="abhi@gmail.com"
 //Object.freeze(jsUser)// after freeze we cant change inside jsuser object

 jsUser.greeting = function(){
    console.log("hello abhinav");
    
 }
 console.log(jsUser.greeting());
 


