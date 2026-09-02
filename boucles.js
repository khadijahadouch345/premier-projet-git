const prompt = require('prompt-sync')();
// // 1. Saisie du nombre
// let n = parseInt(prompt("Entrez le nombre pour la table de multiplication :"));

// console.log(`Table de multiplication de ${n} :`);

// // 2. Boucle for de 1 à 10
// for (let i = 1; i <= 10; i++) {
//     let resultat = n * i;
    
//     // 3. Affichage du calcul
//     console.log(`${n} * ${i} = ${resultat}`);
// }
// // 1. Saisie de n
// let n = parseInt(prompt("Entrez un entier positif pour la factorielle :"));

// // 2. Initialisation à 1
// let factorielle = 1;

// // 3. Boucle de 1 à n
// for (let i = 1; i <= n; i++) {
//     // 4. On multiplie et on accumule
//     factorielle *= i; // équivalent à : factorielle = factorielle * i
// }

// console.log(`${n}! = ${factorielle}`);
// chalenge3 
let n = parseInt(prompt("Entre un nombre entie "));
let somme=0;
let i;
for(i=0 ; i<=n ;i++){
    somme=somme+i;

}
console.log(`La somme des nombresest : ${somme}`);
//challenge 4 
