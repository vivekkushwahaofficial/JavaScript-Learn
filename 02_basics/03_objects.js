// singleton
// Object.create

// object literals
const mySym = Symbol("Key1");

const JsUser = {
  name: "Vivek",
  "full name": "Vivek Kumar",
  [mySym]: "mykey1",
  email: "vivek@google.com",
  location: "Bhopal",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "vivek@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "vivek@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
  
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

