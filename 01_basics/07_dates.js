let myDate = new Date()

// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2023-01-13")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
  weakday: "long"
})










