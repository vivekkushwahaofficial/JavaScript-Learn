/*Two Types of DataTypes
1 Primitive

7 types : String, Number, Boolean, null, undefined,
          symbol, BigInt

*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 24652345634563445n
// console.log(bigNumber);

/*
2 Reference(Non primitive)

Array, Objects, Functions
*/

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
  name: "hitesh",
  age: 22
}

const myFunction = function(){
  // console.log("Hello world"); 
}

// console.log(typeof bigNumber);

//***************************************************

// Stack (Primitive), Heap (Non - Primitive)

let myName = "Vivek"

let anotherName = myName
anotherName = "Kumar"

console.log(myName);
console.log(anotherName);

let userOne = {
  email : "user@google.com",
  upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "vivek@google.com"

console.log(userOne.email);
console.log(userTwo.email);



