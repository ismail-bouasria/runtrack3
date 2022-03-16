
'use strict';

 

 function tri(order) {
    
    var number = [1,2,3,4,5,6,7,8,9,10],
        order1 = 'asc',
        order2 = 'desc'

    if (order == order1) {
        console.log(number);
    } else if (order == order2){

      var  reverse = number.reverse();

     console.log(reverse);

    }
     
    
 
        

   

    
}

console.log(tri('desc'));
