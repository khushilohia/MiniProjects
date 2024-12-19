URL = "https://pokeapi.co/api/v2/pokemon?limit=351"
let btn=document.getElementById("getPokemon");
let msg=document.getElementById("msg");
let imgEl=document.getElementById("pokemonImg");

let num=document.querySelector("#input");

const pokemon = async (input) => {
    let pokemon = await fetch(URL);
    let data = await pokemon.json();
    let pokemonName=data.results[input].name;
    msg.textContent=pokemonName.toUpperCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await response.json();
    console.log(pokemonData);
    const sprite = pokemonData.sprites.front_default;
    imgEl.src=sprite;
}

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let input=num.value;
    pokemon(input);
});