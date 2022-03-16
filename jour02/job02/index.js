'user strict';
 
   


document.addEventListener('DOMContentLoaded', function loaded(){
    
    var button = document.querySelector('button'),
        article = document.querySelector('article');
        function showhide(){

            let result = article.classList.toggle("article");

            if (result) {
                article.style.display = 'none';
            } else {
                article.style.display = 'block';
            }
            
            
    
        }
    button.addEventListener('click',showhide);

})
    