
const prompt = require('prompt-sync')();
// //challenge 3
// let chaine1 = prompt("entre la premier chaines ");
// let chaine2=prompt("entre le deuxiem cheine ");
// console.log(chaine1,chaine2);
// //challenge 4
// let chaineCart1=prompt("entre la premier chaine de caracter ");
// let chaineCart2=prompt("entre la deuxieme chaine de caracter ");
// if(chaine1===chaine2){
//     console.log(`les chaînes sont égales`);
// }else{
//     console.log(`les chaînes sont  différentes`);
// }
//challenge 5 
// let chaineInver=prompt("entre la chaine");
// let affich ="";
// for(let i=chaineInver.length-1; i>=0;i--){
// affich+= chaineInver[i];

// }
// console.log(`la chaine inversee est:${affich}`);
// //challenge 6
// let chineCompte=prompt("entre une chaine de caracteer :");
// let caracter=prompt("entre le caracter:");
// let compte=0;
// if(chineCompte.includes(caracter)===true ){
//     for(let i=0;i<chineCompte.length;i++){
//         if(chineCompte[i]===caracter){
//             compte++;
//         }
        
//     }
//     console.log(compte);
// }else{
//     console.log("le caracter n\'est pas dans la chaine ");
// }
//challenge 7
//challenge 9 
// let chainEspc=prompt("entre une chaine de carcter:");

// let NovChain="";
// for(let i=chainEspc.length-1;i>=0;i--){
//     if(chainEspc[i]!==" "){
//         NovChain=chainEspc[i]+NovChain;
//     }
 
// }
// console.log(NovChain);
let chainEspc=prompt("entre une chaine de carcter:");

let NovChain="";
for(let i=chainEspc.length-1;i>=0;i--){
    if(chainEspc[i]!==" "){
        NovChain=chainEspc[i]+NovChain;
    }
   
}
console.log(NovChain);