let score = "33abc"
//let scoree = 33

console.log(typeof score);
console.log(typeof(score));
//console.log(typeof scoree);


// conversion in number 
let valueInNumber = Number(score)       // this will change the type of
console.log(typeof valueInNumber);
console.log(valueInNumber);
/*
    NOTE:-

    Conversion-
    "33" => 33
    "33abc" => NaN (Not a number)
    true => 1 ; false => 0

*/






// conversion in boolean 
let isLoggedIn = "Sujal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
/* 
    1 => true ; 0 => false
    "" => false
    "Sujal" => true
*/






// conversion in string 
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);