const user = {
    username : "Sujal",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        
    }
} 
user.welcomeMessage()


function chai() {
    let username = "Sujal"
    console.log(this.username);
}
chai()


// const chai = () => {           // this (=>) is the arrow function 
//     let names = "Sujal"
//     console.log(this);
// }
// chai()


const twoNumber = (num1 , num2) =>  num1 + num2
console.log(twoNumber (3,6));


const twoNames = (num1 , num2) => ({username : "Sujal"})
console.log(twoNames (3,6));

