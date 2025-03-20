const name = "sujal"
const repocount = 22

// console.log(name + repocount + "value");          // writting format is old type






console.log(`my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('mygame')

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('1'));

const newString = gameName.substring(0,4)    // in .substring we cannot give negative values
console.log(newString);

const anotherString = gameName.slice(-4,4)   // in .slice we can give negative values
console.log(anotherString);


const newStringSpace = "    sujal    "
console.log(newStringSpace);
console.log(newStringSpace.trim());  // this  .trim will remove the space. 


