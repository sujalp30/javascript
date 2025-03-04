const accountId = 123456
let accountEmail = "sujal@gmail.com"
var accountPassword = "654321"
accountCity = "Vadodara"
let accountState;


accountEmail = "hc@gmail.com"
accountPassword = "21212121"
accountCity = "Indore"

console.log(accountId);


// prefer not to use var 
// because of issue in block scope and functional scope 

console.table([accountId, accountEmail , accountPassword , accountCity , accountState])
