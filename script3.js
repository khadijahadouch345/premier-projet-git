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
let x1;
let x2;
let x3;
if(delta>0){
    x1=(-nombre2 - (delta* 1/2) )/(2*nombre1);
    x2=(-nombre2 + (delta* 1/2) )/(2*nombre1);
    console.log(`les deux solutions sont:${x1} et ${x2}`);
}else if(delta ==0){
    x3=(-nombre2)/(2*nombre1);
    console.log(`la solution est unique:${x3}`);
}else{
    console.log(`il n y a pas de solution`);
   

}
//challenge 5 
let annee =prompt ("entre l annee");
console.log('1.Mois ');
console.log('2.Jours ');
console.log('3.Heures ');
console.log('4.Minutes ');
console.log('5.Secondes ');
let choix =  parseInt(prompt ('entre votre choix'));
switch(choix){
    case 1 :
        console.log(`pour le mois est :${annee*12}`);
        break;
        case 2:
            console.log(`pur le jours est :${annee*365}`);
            break;
            case 3:
                console.log(` pour les heures est:${annee*24*365}`);
                break;
                case 4:
                    console.log(`pour minutes est:${annee*60*24*365}`);
                    break;
                case 5:
                    console.log(`pour secondes est:${annee*60*60*24*365}`);
                    break;
                default:
                        console.log(`choix invalide`);

}
//challenge 6 
let nmbr = prompt ("entrez un nombre ");
if(nmbr>0){
    console.log(`le nombre est positif`);

}else if(nmbr<0){
    console.log(`la nombre est negative`);
}else {
    console.log(`le nombre est egal a zero`);
}
//challenge 7 
let   alphb = prompt ("entre une lettre");
if(alphb.charCodeAt(0) >=65 && alphb.charCodeAt(0) <=90){
    console.log(`la lettre est majuscule`);
}else {
    console.log(`la lettre est minuscule`);

    
}

//challenge 8 
let notes = prompt ("entre votre note ");
if(notes<10){
    console.log(`recale `);

}else if(notes>=10 && notes<12){
    console.log(`passable`);
 }else if(notes>=12 && notes<14){
    console.log(`assez bien`);
}else if(notes>=14 && notes<16){
    console.log(`bien`);
    
}else {

    console.log(`tres bien`);

}
//challenge 9
let crt = prompt ("entre un caractere")
if(crt)
