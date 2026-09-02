const prompt = require('prompt-sync')();
// 1. Demander le nombre
let nombre = parseInt(prompt("Entrez un nombre entier :"));

// 2 & 3. Vérifier la parité avec modulo
if (nombre % 2 === 0) {
    console.log(`Le nombre ${nombre} est pair.`);
} else {
    console.log(`Le nombre ${nombre} est impair.`);
}
// 1 et 2. Demander la lettre et forcer en minuscule
let lettre = prompt("Entrez une lettre :").toLowerCase();

// 3. Vérifier avec switch
switch (lettre) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log(`La lettre "${lettre}" est une voyelle.`);
        break;
    default:
        console.log(`La lettre "${lettre}" est une consonne (ou un autre caractère).`);
}
//challenge 3 
let a = prompt("entre la valeur de a ");
let b = prompt ("entre la valeur de b ");
//affichage 3 
if(a===b){
    console.log(`le triple de leur somme est:${(a+b)*3}`);

}else{
    console.log(`les deux valeur sont differentes`);
}
//challenge 4
let nombre1 = prompt ("entre le premier nombre");
let nombre2 =prompt ("entre le deuxieme nomber");
let nombre3 = prompt("entre le troisieme nombre");
let delta =(nombre2*nombre2)-(4*nombre1*nombre3)
//affichage 4
if(delta>0){
    console.log('')
}