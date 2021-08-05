function Cat(){
    this.image;
    this.breed;


    this.getCat = function(){        
        const xhr = new XMLHttpRequest;
        let cat;
        xhr.open('GET', 'https://api.thecatapi.com/v1/images/search', false);
        xhr.onload = function(e){
            if(xhr.status === 200){
                cat = JSON.parse(xhr.responseText);
                url = cat[0].url;
            }
        }
        xhr.send(null);
        this.image = cat[0].url;
        this.breed = getBreed(cat);
    }

}

function getBreed(ct){  
    if(ct[0].breeds.length >0){
      return(ct[0].breeds[0].name); 
    }else{
        return 'Mestizo';
    }

  }
