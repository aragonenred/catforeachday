document.addEventListener('DOMContentLoaded', function(){
const img = document.querySelector('#img');
const title = document.querySelector('#title');

var cat = getCat();

img.setAttribute('src', cat[0].url);
title.innerHTML = getBreed(cat);

    function getCat(){        
        const xhr = new XMLHttpRequest;
        let cat;
        xhr.open('GET', 'https://api.thecatapi.com/v1/images/search', false);
        xhr.onload = function(e){
            if(xhr.status === 200){
                cat = JSON.parse(xhr.responseText);
                console.log(xhr.responseText);
                url = cat[0].url;
            }
        }
        xhr.send(null);
        return cat;
    }

   function getBreed(ct){  
      if(ct[0].breeds.length >0){
        return(ct[0].breeds[0].name); 
      }else{
          return 'Mestizo';
      }

    }



});