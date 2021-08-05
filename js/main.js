document.addEventListener('DOMContentLoaded', function(){
    const img = document.querySelector('#img');
    const title = document.querySelector('#title');
    const ul_breeds = document.querySelector('#ul_breeds');
    const skillset = document.querySelector('#skillset');
    const breed_name = document.querySelector('#breed_name');
    const breed_origin = document.querySelector('#breed_origin');
    const breed_img = document.querySelector('#breed_img');
    const breed_description = document.querySelector('#breed_description');
    const breed_wiki = document.querySelector('#breed_wiki');


    /**index.html */
    var cat = new Cat();
    cat.getCat();

    if(img){
        img.setAttribute('src', cat.image);
        title.innerHTML = cat.breed;

    }

    /**breeds.html */
    /**Load the breeds list on launch*/
    if(ul_breeds){
        var breed = new Breed();
        var breedList = breed.getAllBreeds();
        for(i=0; i<breedList.length; i++){
            let li = document.createElement('li');
            let url;

            //Si existe la url la cargo y sino pongo una imagen generica
            if( breedList[i].hasOwnProperty('image') && breedList[i].image.hasOwnProperty('url') === true ){
                    url = breedList[i].image.url;
            }else{
                    url = 'img/default.png';
            }
        
            let content = `<a href="breed.php?q=${breedList[i].name}"><img src="${url}" alt="">
                            <p>${breedList[i].name}</p>
                            <div>
                                <div class="separador"></div>
                                <div class="separador"></div>
                                <div class="separador"></div>
                            </div></a>`;
            li.innerHTML = content;
            ul_breeds.appendChild(li);
        }
    }
    /**Breed.html */
    if(window.location.pathname === '/catforeachday/breed.php'){
        const q = document.querySelector('#breed_q').innerText;    
        var breed = new Breed();
        breed.getBreed(q);
        breed_name.innerHTML = breed.name;
        breed_origin.innerHTML = breed.origin;
        breed_img.setAttribute('src', breed.image);
        breed_description.innerHTML = breed.description;
        breed_wiki.setAttribute('href',breed.wiki);

    /**Barra de caracteristicas: */
    if(skillset){
        loadSkillBar();
    }
    function loadSkillBar(){
            var skills = Array();
           
            for(s in breed.skills){
                console.log(breed.skills[s]);
                skills.push( {
                        'headline':s,
                        'value':breed.skills[s],
                        'length':5,
                        'description':s 
                    });
            }
            $(document).ready(function(){   
                object = skills;
                $("#skillset").skillset({       
                    object:object,
                    duration:80
                });
            });
        }
    }//if breed.html
    


});