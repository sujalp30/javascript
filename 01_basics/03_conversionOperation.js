let score = "33abc"
//let scoree = 33

// console.log(typeof score);
// console.log(typeof(score));
//console.log(typeof scoree);


// conversion in number 
let valueInNumber = Number(score)       // this will change the type of
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
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
// console.log(booleanIsLoggedIn);
/* 
    1 => true ; 0 => false
    "" => false
    "Sujal" => true
*/






// conversion in string 
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




// ************************OPERATIONS************************

let value = 3
let negvalue = -value
// console.log(negvalue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);


let str1 ="hello"
let str2 = " Sujal"

let str3 = str1 + str2
// console.log(str3);




// console.log(1 + 2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log("1" + (2 + 2));
// console.log(1 + 2 + "2");



console.log(+true);
//console.log(true+);    // this will show error
console.log(+"");



let gameCounter = 100
gameCounter++;
console.log(gameCounter);