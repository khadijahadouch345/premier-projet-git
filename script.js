//challenge 1
const prompt = require('prompt-sync')();
// let nom = prompt("Quel est votre nom?");
// let prenom = prompt("Quel est votre prenom?");
// let age = prompt("Quel est votre age?");
// let sexe = prompt ("Quel estvotre sexe (M/F)?");
// let email = prompt ("Quele est votre adresse e-mail?");
// //Affichege 1
// console.log (`Voici vos informations:
// - Nom :${nom}
// -Prenom :${prenom}
// - Age :${age}
// - Sexe :${sexe}
// - E-mail :${email} `); 
// // challenge 2
// let tempCelsius = parseFloat (prompt ("Entrez la temperateure en Celsius:"));
// let tempKelvin = tempCelsius + 273.15;
//  //Affichage 2
// console.log (`La tempereture est ${tempCelsius} C correspond a ${tempKelvin}K`);
// // challenge  3 
// let distKm = prompt ("Entre la distance en kilometres");
// let yards = distKm* 1093.61;
// //Affichge challenge 3 
// console.log (`La transformation en yards est:${yards}`);
// // challenge 4 
// let vitKm = prompt ("Entre la vitesse e kilometres par heure");
// let vitMetSec = vitKm * 0.27778;
// // Affichage 4
// console.log (`La vitesse en metres par seconde est :${vitMetSec}`);
// // challenge 5
// let temCel = prompt ("entre la tempereture en Celsius");
// //Affichage 5
// if (temCel<0){
//     console.log ("l etat de l eau est :Solise ");
// }else if (temCel<=0 && temCel<100){
//     console.log("l etat de l eau est :Liquide");
    
// }else{
//     console.log("l etat de l eau est :Gas");
// }
// //challenge 6
// let a = prompt ("entre la valeur de a");
// let b  = prompt ("entre la valeur de b ");
// // Affichge6 6 
// console.log(`la somme de a et b est :${a+b}>n`)
// console.log(`la difference de a et b est:${a-b}>n`);
// console.log(`la multiplication de a et b est :${a*b}`);
// console.log(`la division de a et b est:${(a/b).toFixed(2)}`);
// //challenge 7 
// let nombre1 = prompt ("entre le premier nombre ");
// let nombre2 = prompt ("entre le deuxieme nombre");
// let nombre3 = prompt ("entre le troisieme nombre");
// //affichage 7
// console.log(`la moyenne pondereeest:${((nombre1*2 )+(nombre2*3)+(nombre3*5))/10}`);
//challenge 8
// let nmb1 = prompt ("entre le premier nombre");
// let nmb2 = prompt("entre le deuxieme nombre");
// let nmb3 = prompt ("entre le troiseme nombre");
// //affichage 8 
// console.log(`la moyenne geometrique est:${(nmb1 * nmb2 * nmb3)**(1/3)}`);
// //challenge 9
// let x1= prompt("entre la valeur de x1 : ");
// let x2= prompt("entre lavaleur de x2 : ");
// let y1= prompt("entre la valeur de y1: ");
// let y2= prompt("entre lavaleur de y2 : ");
// let z1= prompt("entre la valeur de z1 : ");
// let z2= prompt("entre lavaleur de z2 : ");
// let distance= (x2-x1)**2 +(y2-y1)**2 +(z2-z1);
// //affichage 9
// console.log(`la distance entre deux points dans un espace 3d est:${distance**0.5}`);
// //challenge 10
// let rayon= prompt("entre le rayon de la sphere:");
// const pi=3.14;
// //affichage 10
// console.log(`le volume d'une sphère :${(4/3)*pi*(rayon)**3}`);
// //challenge 11
// let longueur=prompt("entre la langeur du rectangle:");
// let largeur=prompt("entre la largure du rectangle:");cv 
// let surface=longueur*largeur;
// //affichage 11
// console.log(`la surface d\'un rectangle:${surface}`);
// //challenge 12
// let nombre=Number(prompt("entre un nombre a quatre chiffres"));
// let chiffre1=nombre%10;
//  let rest=Math.floor(nombre/10);
// let chiffre2=rest%10;
//  rest=Math.floor(rest/10);
// let chiffre3=rest%10;
// rest=Math.floor(rest/10);
// let chiffre4=rest%10;
// //affichage 12
// console.log(`Nombre en order inverse:${chiffre1}${chiffre2}${chiffre3}${chiffre4}`);
//challenge13
let nombreBiner=prompt("entre un nombre :");
let bin="";
while(nombreBiner >0 ){
    let reste=nombreBiner%2;
    bin=reste+bin;
    nombreBiner=Math.floor(nombreBiner/2);
}
console.log(bin);





