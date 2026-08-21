function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()   // sayMyName -> reference & () -> executions

// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){
  // let result = number1 + number2;
  // return result
  return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username) {
  // if(username === undefined){
  if(!username){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}
// console.log(loginUserMessage());

// console.log(loginUserMessage("Vivek"));


function calculateCartPrice(...num1) {   // Here (...num1) -> rest operator
// function calculateCartPrice(val1, val2,...num1) {
  return num1
}

// console.log(calculateCartPrice(200, 400, 50, 3000));


const user = {
    username: "Vivek",
    price: 199
}

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);          // `` -> backtick
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 500, 100]

function returnSecondValue(getArray){
  return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));




