
'use strict';

 

 function jourTravail(jour, mois, annee) {
    var jourFerie = ['01/01/2020','13/04/2020','01/05/2020','08/05/2020','21/05/2020',
        '01/06/2020','14/07/2020','15/08/2020','01/11/2020','11/11/2020','25/12/2020'],
        // dateString = jour + "/"+mois + "/"+annee;
        dateString = annee+"-"+mois+"-"+jour;
    var date = new Date(dateString),
        datefr = date.toLocaleDateString(),
        day = date.getDay();
      
       

       if (day == 0 || day == 6) {
           
        console.log('Non, '+datefr+' est un week-end.');

       }else if (day != 0 || day!= 6) {
        for (let i = 0; i < jourFerie.length; i++) {
        
    
            if (datefr == jourFerie[i]) {
                console.log('Le '+datefr+' est un jour férié.');
            }
        }
        
        
    }else{
        console.log('Oui, '+datefr+' est un jour travaillé.');
    }
       
        
 
        

   

    
}

console.log(jourTravail('13', '04', '2020'));
