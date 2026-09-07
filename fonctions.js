//challenge 3
function nombreMax(a,b){
    if(a>b){
        console.log("a est le plus grand des deux");
    }
   else{
    console.log("b est le plus grand des deux");

       }

}
nombreMax(4,7);
//challenge 4
function nombreMin(a,b){
    if(a<b){
        console.log ("a est le plus petit des deux ");
    } else {
        console.log("b est le plus petit des deux");
    }


}
nombreMin(9,10);
//challenge 5
function factorielle(a){
    if(a>0){
       let s=1;
        for(let i=a;i>0;i--){
             s=s*i ;
            
        }
        return s;
    }else {
        console.log("le nombre est negativ");
   }
}
console.log(factorielle(4));
//challenge 6

//challenge7
function compteRebours(a){
    for(let i=a;i>=0;i--){
        console.log(i);
    }
}
compteRebours(5);
//challenge 8 
function verificetionPatir(a){
    if(a%2==0){
        console.log("True");
    }else{
        console.log("False");
    }

}
verificetionPatir(4);

