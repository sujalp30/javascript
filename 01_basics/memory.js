// TYPES OF MEMORY:-

// STACK (PRIMITIVE)  ;   HEAP (NON PRIMITIVE)

// STACK - Isme copies hoti toh kisi me change kra toh vo copies me change hoga.
// HEAP - ISme original value change hogi.


//stack eg-
let myName = "Sujal"
let myAnotherName = myName
myAnotherName = "Sujal patel"

console.log(myName);
console.log(myAnotherName);



// heap eg-
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "usertwo@google.com"

console.log(userTwo.email);
console.log(userOne.email);

