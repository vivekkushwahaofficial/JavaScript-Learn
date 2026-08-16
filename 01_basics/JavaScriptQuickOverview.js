/*

1. JAVASCRIPT

JavaScript = Programming language used to add logic and interactivity to web pages.

HTML       → Structure
CSS        → Design
JavaScript → Logic + Behavior

JavaScript is:
→ High-level
→ Dynamically typed
→ Multi-paradigm
→ Prototype-based


2. VARIABLES

let   → Can change
const → Cannot be reassigned
var   → Old style; avoid in modern JS

Example:

let age = 22;
age = 23;

const name = "Vivek";


3. DATA TYPES

Primitive:
String, Number, Boolean, Undefined, Null, BigInt, Symbol

Non-Primitive:
Object, Array, Function

Check type:

typeof value


4. TYPE CONVERSION

Convert to Number:

Number("33") → 33

Convert to String:

String(33) → "33"

Convert to Boolean:

Boolean(1) → true
Boolean(0) → false
Boolean("") → false
Boolean("Vivek") → true

Important:

Number("Vivek") → NaN


5. OPERATORS

Arithmetic:
+  -  *  /  %

Comparison:
>  <  >=  <=
===  !==

Logical:
&& → AND
|| → OR
!  → NOT

IMPORTANT:
Use === instead of == in most cases.


6. CONDITIONS

Used when the program needs to make a decision.

if → else if → else

Example:

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

Also:
switch
ternary (? :)


7. LOOPS

Used to repeat code.

for
while
do...while

Example:

for (let i = 0; i < 5; i++) {
    console.log(i);
}


8. FUNCTIONS

Function = Reusable block of code.

Example:

function add(a, b) {
    return a + b;
}

a, b → Parameters
Values passed → Arguments
return → Sends result back

Arrow function:

const add = (a, b) => a + b;


9. ARRAYS

Array = Collection of values.

const numbers = [10, 20, 30];

High-value methods:

map()     → Transform every element
filter()  → Keep matching elements
reduce()  → Combine into one result
find()    → Find first matching element
some()    → Is at least one matching?
every()   → Do all match?
forEach() → Run code for each element

Remember:

map    → Change
filter → Select
reduce → Calculate


10. OBJECTS

Object = Collection of related data using key-value pairs.

const student = {
    name: "Vivek",
    age: 22
};

Access:

student.name
student.age

Important:
→ Destructuring
→ Spread (...)
→ Optional chaining (?.)
→ Nullish coalescing (??)


11. SCOPE

Scope = Where a variable can be accessed.

var   → Function scoped
let   → Block scoped
const → Block scoped

Important:
Prefer let/const over var.


12. HOISTING

Hoisting = JavaScript processes certain declarations before execution.

Important:
let and const are NOT safely usable before their declaration.

Example:

console.log(age);
let age = 22;

This causes an error.


13. CLOSURE

Closure = A function remembers variables from its outer scope even after the outer function has finished.

Main idea:

Inner function
    ↓
remembers
    ↓
Outer function variables


14. DOM

DOM = Document Object Model.

JavaScript uses the DOM to interact with HTML.

Important:

document.querySelector()
document.querySelectorAll()
document.getElementById()

Can also:
→ Change text
→ Change classes
→ Create elements
→ Remove elements
→ Change attributes


15. EVENTS

Event = Something that happens in the browser.

Examples:

click
submit
input
change
keydown

Example:

button.addEventListener("click", () => {
    console.log("Clicked");
});


16. EVENT BUBBLING

When an event happens on a child element,
the event can travel upward to its parent elements.

Important for:

→ Event delegation
→ Understanding DOM events


17. SYNCHRONOUS vs ASYNCHRONOUS

Synchronous:
Code executes one task after another.

Asynchronous:
A task can start and finish later without blocking everything.

Common async operations:

→ API requests
→ Timers
→ File operations


18. PROMISE

Promise represents a future result.

States:

Pending
   ↓
Fulfilled / Rejected

Example:

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));


19. ASYNC / AWAIT

Cleaner way to work with Promises.

Example:

async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

Remember:

async → function works with Promise
await → wait for Promise result


20. EVENT LOOP

JavaScript normally executes code using a single main thread.

Important pieces:

Call Stack
↓
Web APIs
↓
Task Queue / Microtask Queue
↓
Event Loop
↓
Call Stack

Purpose:
Allows JavaScript to handle asynchronous operations efficiently.


21. FETCH API

Used to communicate with backend APIs.

Example:

const response = await fetch(url);
const data = await response.json();

Flow:

JavaScript
   ↓
HTTP Request
   ↓
Backend API
   ↓
HTTP Response
   ↓
JavaScript


22. HTTP METHODS

GET    → Read
POST   → Create
PUT    → Replace
PATCH  → Partial update
DELETE → Delete


23. REST API

Frontend
   ↓
HTTP
   ↓
Spring Boot Controller
   ↓
Service
   ↓
Repository
   ↓
PostgreSQL
   ↓
Response
   ↓
Frontend


24. LOCAL STORAGE

Used to store data in the browser.

localStorage.setItem("name", "Vivek");

localStorage.getItem("name");

localStorage → Data remains after browser restart.


25. MODULES

Modules allow JavaScript code to be separated into files.

Export:

export { add };

Import:

import { add } from "./math.js";


MOST IMPORTANT JAVASCRIPT CONCEPTS

If you have limited time, prioritize:

1. Variables
2. Data Types
3. Type Conversion
4. Operators
5. Conditions
6. Loops
7. Functions
8. Arrays
9. Objects
10. Scope
11. Hoisting
12. Closures
13. DOM
14. Events
15. Promises
16. async/await
17. Fetch API
18. HTTP/REST
19. Event Loop
20. Modules


ONE-LINE MEMORY

Variables  → Store data
Data Types → Type of data
Functions  → Reuse logic
Conditions → Make decisions
Loops      → Repeat
Arrays     → Store collections
Objects    → Store related data
DOM        → Control HTML
Events     → React to user actions
Promise    → Future result
async/await → Handle async code
Fetch      → Call APIs
HTTP       → Communication
Modules    → Organize code


JAVASCRIPT → REACT CONNECTION

JavaScript
   ↓
Functions + Arrays + Objects
   ↓
DOM + Events
   ↓
Async JavaScript
   ↓
Fetch + REST APIs
   ↓
TypeScript
   ↓
React
*/