'user strict';
 
   


    
    var button = document.getElementById("button");
        
        
    button.addEventListener("click", showhide => {

        document.querySelector('article').classList.toggle("hidden")

      /*if(getComputedStyle(article).display == "none"){
        
        article.style.display = "block";
        
      } else {
        article.style.display = "none";
        
      }
      console.log(article.style.display);*/
       
    })
    

    