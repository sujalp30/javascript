const score = 400
// console.log(score);



const balance = new Number(700)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));                         // this will give the decimal value after number eg - 700(after this number it will give decimal)





const number = 23.8989                     
// console.log(number.toPrecision(3));                      // this .toPrecision will round off the number





const hundred = 1000000
// console.log(hundred.toLocaleString());                   // this will automatically give comas between number
// console.log(hundred.toLocaleString('en-IN'));            // this will automatically give comas between number in (indian format)



// ************************************************** MATH **************************************************

// console.log(Math);
// console.log(Math.abs(-4));                                        // this .abs will convert the negative value in the positive value
// console.log(Math.round(4.6));                                     // this .round will roundoff the value
// console.log(Math.ceil(4.2));                                      // this .ceil will give the roundoff value if you will write 4.1,4.2,etc then also it will give next value of that number
// console.log(Math.floor(4.1));                                     // this .floor will give the roundoff value at low




// console.log(Math.min(3 , 6 , 9 , 8));                             // this .min will show the smallest value in the array  
// console.log(Math.max(3 , 6 , 9 , 8));                             // this .max will show the highest value in the array  
                    



console.log(Math.random());                                           // this will generate random number
console.log((Math.random()*10) + 1 );





// in case we have to define min and max
const min = 20
const max = 40

console.log(Math.floor(Math.random() * (min - max + 1) + min));       //formula


