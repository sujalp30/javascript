const marvelHeroes = ["ironman","spiderman","thor"]
const dcHeroes = ["superman","batman","flash"] 

marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);

// console.log(marvelHeroes[3][2]);

const allheroes = marvelHeroes.concat(dcHeroes)               // this concat method will merge the 2 arrays 
// console.log(allheroes);
const all_new_heroes = [...marvelHeroes,...dcHeroes]
console.log(all_new_heroes);




const another_array = [1,2,3,[4,5,6],7,8,9,[10,11,[12,13]],14]
const merge_another_array = another_array.flat(Infinity)
console.log(merge_another_array);



console.log(Array.from("Sujal"));                     // this from will convert the name in single single letters

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));          // merge the numbers  

