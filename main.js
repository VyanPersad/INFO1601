async function loadListing(url){

        let response = await fetch("https://pokedextr-api.herokuapp.com/pokemon");//1. Send http request and get response
        let result = await response.json();
        displayListing(result);
       
     }



function displayListing(pokemon){
    let result=document.querySelector('#listing');
    let html='';
     for(let arr of pokemon)
    {
        html+=`<tr id="${arr.name}">
        <td><a href="#listing" id=${arr.name} 
        class= "collection-item" 
        onclick="getPokemon('${arr.pid}')">${arr.name}</a></td></tr>`;
    }
    result.innerHTML = html;
}

async function getPokemon(pid){
   let response = await fetch(`https://pokedextr-api.herokuapp.com/pokemon/${pid}`);//1. Send http request and get response
    let result= await response.json();
   displayPokemon(result);
}
  
 function displayPokemon(pokemon) { 
    let result = document.querySelector('#result');
    let html= '';
        html+= `<div id="result" class="card col m12 l10 offset-l1" style="margin-top: 20px">
             <div class="card-image" >
             <img class="teal"
             src="${pokemon.image}" alt="${pokemon.name}">  
        </div>
        <div class="card-content">
          <span class="card-title"><p>${pokemon.name} ${pokemon.pid}</p></span>
              <p>Type1: ${pokemon.type1}</p>
              <p>Weight: ${pokemon.weight}</p>
              <p>Height: ${pokemon.height}</p>
              <a onclick="catchPokemon(${pokemon.pid})" id="catchBtn" style="position:absolute; right:15px; bottom:80px"  class="btn-floating btn-large waves-effect waves-light red">
         <span class="iconify" style="font-size:40px; margin-top:8px" data-icon="mdi-pokeball" data-inline="false"></span>
         </a>
       </div>
 </div>`;
       result.innerHTML = html; 
}

// Bonus Functions

async function catchPokemon(pid){
    const id = getId();//gets the userid from the text field or prompts the user
    //prompts the user to enter a name
    //makes a request to the capture pokemon API url passing the name data in the body
}

async function getMyPokemon(){
    //makes a request to the get captured pokemon API url
    //get the data from the request and sends it to displayMyPokemon()
}

function displayMyPokemon(mypokemon){
    //receives an array of mypokemon objects and displays its data on the page in #myPokeListing
}

async function releasePokemon(box_id){
    const id = getId();//gets the userid from the text field or prompts the user
    //makes a request to the release pokemon API url then call getMyPokemon() to reload the table
}