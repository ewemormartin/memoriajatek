import kartya from "./Kartya.js";
import {LISTA} from "./adatok.js";

$(function(){
    let szuloElem = $(".tarolo")
    
    for (let index = 0; index < LISTA.length; index++) {
        var kepINdex = LISTA[index][20];
        let k1 = new kartya(LISTA[index], kepINdex, szuloElem);
        
    }
    
});