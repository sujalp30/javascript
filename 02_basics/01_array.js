// ARRAY

const myArray = [0 , 1 , 2 , 3 , 4]
// console.log(myArray);
// console.log(myArray[0]);

const myHeroes = ["shakti" , "bhakti ","mitti"]
// console.log(myHeroes);
// console.log(myHeroes[2]);



// ARRAY METHODS

myArray.push(5)                            // this method will enter the number in the array
// console.log(myArray);


myArray.pop()                              // this method will remove the last value in the array
// console.log(myArray);


myArray.unshift(9)                         // this method will add the value at the first place of array
// console.log(myArray);


// console.log(myArray.includes(8));






const newArray = myArray.join()                 // in this join method bracet will ermove of the array
// console.log(newArray);






//SLICE / SPICE


console.log(myArray);

const mynarry1 = myArray.slice(1 , 3)           // IN this method it will give the value from one point to another.......but it will not include the 3rd value
console.log(mynarry1);

const mynarry2 = myArray.splice(1 , 3)           // IN this method it will give the value from one point to another.............and also include 3rd value
console.log(mynarry2);




