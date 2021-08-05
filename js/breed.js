function Breed(){

    this.name;
    this.image;
    this.description;
    this.origin;
    this.wiki;
    this.skills = {
            Adaptability:0,
            Affection:0,
            Child_Friendly:0,
            Dog_Friendly:0,
            Energy:0,
            Intelligence:0
        }


    this.getBreed = function(q){
        let breed;
        const xhr = new XMLHttpRequest;
        xhr.open('GET', 'https://api.thecatapi.com/v1/breeds/search?q=' + q, false);
        xhr.onload = function(e){
            if(xhr.status ===200){
                breed = JSON.parse(xhr.responseText);              
            }
        }
        xhr.send(null);
        this.name = breed[0].name;
        this.image = 'https://cdn2.thecatapi.com/images/' + breed[0].reference_image_id +'.jpg';
        this.description = breed[0].description;
        this.origin = breed[0].origin;
        this.wiki = breed[0].wikipedia_url;
        this.skills.Energy = breed[0].energy_level;
        this.skills.Adaptability = breed[0].adaptability;
        this.skills.Intelligence = breed[0].intelligence;
        this.skills.Child_Friendly = breed[0].child_friendly;
        this.skills.Dog_Friendly = breed[0].dog_friendly;
        this.skills.Affection = breed[0].affection_level;
        
        
    }

    this.getAllBreeds = function(){
            let breeds;
            const xhr = new XMLHttpRequest;
            xhr.open('GET', 'https://api.thecatapi.com/v1/breeds', false);
            xhr.onload = function(e){
                if(xhr.status === 200){
                   breeds = JSON.parse(xhr.responseText);
                }
            }
            xhr.send(null);
            console.log(breeds);
            return breeds;
    }
   
    
}