
function sayMyName()
{
    console.log("s");
    console.log("u");
    console.log("j");
    console.log("a");
    console.log("l"); 
}
// sayMyName()




function addTwoNumbers(number1 , number2){
    console.log(number1 + number2);
}
addTwoNumbers()
addTwoNumbers(3 , 3)
addTwoNumbers(3 , "3")
addTwoNumbers(3 , "a")
addTwoNumbers(3 , null)





function addNumbers(number1 , number2){
    let result = number1 + number2
    return result
}
const result = addNumbers(5 , 5)
console.log("Result - ",result);





function loginUser(username){
    return `${username} just logged in `
}
console.log(loginUser("Sujal"));








function calculatePrice(num1){                                // in this only one number will show
    return num1
}
console.log(calculatePrice(200 , 400 , 500));


  
function calculateCartPrice(...num1){                         // in this multiple number will show
    return num1
}
console.log(calculateCartPrice(200 , 400 , 600 , 800));




// passing the object in function
const user = {
    username : "Sujal",
    price : 400
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleObject(user)





// passing the array in function
const myNewArray = [200 , 300 , 400 , 500]

function secondvalue(getarray) {
    return getarray[2]
}
console.log(secondvalue(myNewArray));
