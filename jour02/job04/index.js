'user strict';
 
document.addEventListener('DOMContentLoaded', function loaded(){
    
   
       var textArea = document.querySelector('#keylogger');
       
       document.addEventListener('keydown',()=>{

        keydown = textArea.onkeydown

        if (keydown) {
            textArea.innerHTML++;
        }
       
       

        console.log({textArea});



       })
       
        

         

})