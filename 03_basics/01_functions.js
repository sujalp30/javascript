
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
    return '${username} just logged in '
}
console.log(loginUser("Sujal"));

