// Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log(`DB CONNECTED`);
})();

( function aurcode() {
  console.log(`DB CONNECTTED TWO`);
})();

( () => {
  console.log(`DB CONNECTTED THREE`);
})();

( (name) => {
  console.log(`DB CONNECTTED THREE ${name}`);
})('Vivek')
