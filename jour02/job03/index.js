
'user strict';
 
   


document.addEventListener('DOMContentLoaded', function loaded(){
    
    var button = document.querySelector('button'),
        p = document.querySelector('p');
        console.log({p})
        function addone(){
           p.innerText++
    
        }
    button.addEventListener('click',addone);

})
    