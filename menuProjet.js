const prompt = require('prompt-sync')();
const menu={
   1:{
    1:"numero ",
    2:"telephone",
    3:"ok",
    4:"merci",
    "#": "Exit"
   },
    2:{
        1:"numero ",
        2:"telephone",
       "#": "Exit"
    },
    3:{
    1:"numero ",
    2:"telephone",
    3:"ok",
    4:"merci",
  "#": "Exit"
   },
    4:{
    1:"numero ",
    2:"telephone",
    3:"ok",
    4:"merci",
    "#": "Exit"
   },
   "#": "Exit"
};

let choix = null;

while(true){
    switch(choix){
        case null:
            for(let men in menu){
                console.log(men);
            }
            choix= prompt("entre valeur:");
            break;
        case "1":
            for(let a in menu[1]){
                console.log(menu[1][a]);
                
            }
            let chox = prompt("entre valeur:");
                
                    switch(chox){
                    case "#":
                        choix=null;
                        break;
                    default:
                        console.log("Choix invalide");
                    }
                
            break;
        case "2":
            for(let a in menu[2]){
                console.log(a)
            };
                 let b = prompt("entre valeur:");
                
                    switch(b){
                    case "#":
                        choix=null;
                        break;
                    default:
                        console.log("Choix invalide");
                    }
        
            break; 
        case "3":
            for(let a in menu[3]){
                console.log(a)
            };
            break;
        case "4":
            for(let a in menu[4]){
                console.log(a)
            };
            break;

        
    }
    
}