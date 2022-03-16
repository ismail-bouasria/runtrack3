
'use strict';

 

 function sommeNombresPremiers(nombre1, nombre2) {
    
    var compt1 = 0;

    for (let i=2; i < nombre1 ; i++) { 
       
        if (nombre1 % i == 0) {
            compt1++;
        }
        
    }
  
    var compt2 = 0;

    for (let j= 2; j < nombre2; j++) {
       

       if (nombre2 % j == 0) {
           compt2++;
       }
        
    }
    
  if (compt1 == 0 && compt2 == 0) {
      var sum = nombre1 + nombre2;
      return sum ;
  }else{
      return false; 
  }
   

    
}

console.log(sommeNombresPremiers(5,3));
