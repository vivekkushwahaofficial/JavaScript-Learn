let a = 300
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);


function one() {
  const username = "Vivek"

  function two(){
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);
  two()
}
one()

if(true){
  const username = "Vivek"
  if(username === "Vivek"){
    const website = " youtube"
    // console.log(username + website);
  }
}

//+++++++++++++++++ Interesting +++++++++++++++++

console.log(addone(5))
function addone(num){
  return num + 1
}


const addTwo = function(num){
  return num + 2
}
addTwo(5)

