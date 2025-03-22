// OBJECT LITERALS  

const mySymb = Symbol("key1")

const jsUser = {
    name : "Sujal",
    age : 18,
    location : "india",
    [mySymb] : "mykey1"

}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser[mySymb]);
// console.log(jsUser["mySymb"]);



jsUser.greeting = function(){
    console.log("Hello everyone");
}

jsUser.greetingTwo = function(){
    console.log('Hello everyone , ${this.name}');
}



console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());

