let output = document.querySelector(".output");
let out = "";
fetch("./pokemon.json")
  .then((response) => response.json())
  .then((pokemons) => {
    for(let pokemon of pokemons){
        out +=`
        <div class = "card">
        <div class = "info">
        <img src="${pokemon.img}">
        <div class = "tekst">
        <h1>${pokemon.name}</h1>
        </div>
        </div>
        </div>
        `
    }
    output.innerHTML = out;
  });
