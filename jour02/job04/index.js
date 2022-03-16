
'use strict';

 var annee = '';

 function bisextil(annee) {

    if (annee % 4 == 0 && annee % 100 !=0 || annee % 400 == 0) {
        
        return true;
        
    }else{
       
        return false;
    }
     
}

console.log(bisextil('2000'));
console.log(bisextil('1999'));