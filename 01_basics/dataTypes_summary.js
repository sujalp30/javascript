// THERE ARE TYPES OF DATA TYPES:-

// Primitive => 
//          7 types => String , Number , Boolean , Null , Undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3

const issLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

// const bigNumber = 12345654645615615156n


// Reference (Non-primitive) =>
//       Array , Objects , Functions

const heroes = ["iron , spider ,captain"]
let myobj = {
    name : "Sujal",
    age : 20,
}

const myFunction = function()
{
    console.log("Hello world");
}

console.log(typeof heroes);
