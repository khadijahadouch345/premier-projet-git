const prompt = require('prompt-sync')();
// //challenge 3
// let nombre=Number(prompt("entre le nombre deelement de tableaux"))
// let tableu=[];
// let somme = 0;
// for(let i=0 ; i<nombre;i++){
//     tableu.push(Number(prompt(`entre les valeur detableaux `)));
// somme+=tableu[i];
// }
// console.log(somme);
//challenge 4
let nombre=Number(prompt("entre le nombre deelement de tableaux"))
let tableu=[];
for(let i=0 ; i<nombre;i++){
    tableu.push(Number(prompt(`entre les valeur detableaux `)));
somme+=tableu[i];
}
console.log(somme);
//challenge 