async function pokemonQuery(pokemonURL,pokemonName){
    let url = pokemonURL + pokemonName;
    let respuesta ;
        respuesta = await axios.get(url);
        console.log("",)
        //console.log("respuesta.data",respuesta.data)
        return respuesta.data;   
};
let pokemonInfo = document.querySelector('[class="containerInfo"]');
pokemonInfo.style.display = 'block'; //pokemonInfo.style.display = 'block';
//const pokemonAll = await pokemonQuery('https://pokeapi.co/api/v2/pokemon/');





async function verResults(pokemonName){
    let pokemonInfo = document.querySelector('[class="containerInfo"]');

    const pokemonResults = await pokemonQuery('https://pokeapi.co/api/v2/pokemon/',pokemonName);

        console.log(pokemonResults);
        console.log(pokemonResults.name);
        console.log(pokemonResults.id);

        pokemonInfo.style.display = 'block';        
        const pokemonname = document.querySelector('[class="pokemonName"]');
        pokemonname.innerHTML = pokemonResults.name;
        
        
        const pokemonImg = document.querySelector('[class="pokemonImg"]');
        pokemonImg.src = pokemonResults.sprites.other["official-artwork"].front_default;
        //console.log(pokemonImg.src);
        const pokemonType = document.querySelector('[class="pokemonType"]');
        let pokemonTypeList = [];
        
        pokemonResults.types.forEach(e=>pokemonTypeList.push(e.type.name));
        let pokemonTypeListText = pokemonTypeList.join(', ');
        pokemonType.innerHTML = pokemonTypeListText;

        const pokemonabilities = document.querySelector('[class="pokemonAbilities"]');
        let pokemonAbilitiesList = [];
        pokemonResults.abilities.forEach(e=>pokemonAbilitiesList.push(e.ability.name));
        let pokemonAbilitiesListText = pokemonAbilitiesList.join(', ');
        pokemonabilities.innerHTML = pokemonAbilitiesListText;
        
        const pokemonID = pokemonResults.id;
        const pokemonEXTRAResults = await pokemonQuery('https://pokeapi.co/api/v2/pokemon-species/',pokemonID);
        const pokemonDescrition = document.querySelector('[class="pokemonDescrition"]');
        //console.log(pokemonDescrition);
        pokemonDescrition.innerHTML = pokemonEXTRAResults.flavor_text_entries[0].flavor_text;
   

};


let searchButton = document.querySelector('[class="buttonSearch"]');
searchButton.addEventListener("click",()=>{
    //Captura de los parametros de busqueda

    const inputText = document.querySelector('[id="in1"]').value ;

    verResults(inputText);
    //verResults('rayquaza');
    //verResults('cresselia');

    console.log('ver resultado',verResults);

});
