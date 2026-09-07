const prompt = require('prompt-sync')();
//challenge 3
const rectangle={
    longueur:9,
    largeur:6,
}
function air(rectangle){
    return rectangle.largeur*rectangle.longueur;
}
let valeur=air(rectangle);
console.log(valeur);
//challenge 4
const point={
    x:4,
    y:2,
}
console.log(`les valeur de x :${point.x} et pour y:${point.y}`);
point.x=5;
point.y=9;
console.log(`les valeur de x :${point.x} et pour y:${point.y}`);
//challenge 5
const livre={
    titre: "Youcode",
    auteur: "khadija",
    annee: 2026,
}
function afficheLivre(l){
    console.log(`le titre:${l.titre},L auteur:${l.auteur},Lannee:${l.annee}`);
}
afficheLivre(livre);