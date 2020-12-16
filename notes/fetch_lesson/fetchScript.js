const pokeApi = "https://pokeapi.co/api/v2/pokemon";
const form = document.getElementById("pokemon-search");

function populatePokemonDiv(data) {
  const {types, forms, sprites} = data;
  const pokemonName = forms[0].name
  const typesString = types.reduce((initial, next) => {
    return initial += `${next["type"]["name"]}`
  }, "")
  const { front_default: pictureUrl } = sprites; 
  document.getElementById("main-section").innerHTML = `
    <div class="card">
        <img src="${pictureUrl}" class="card-img-top" alt="${pokemonName}">
        <h5 class='card-title'>${data.forms[0].name}</h5>
        <p class='card-subtitle mb-2 text-muted'>Type: ${typesString}</p>
    </div>`
}

function errorCleanUp(err) {
    console.log(err.message)
    document.getElementById('main-section').innerHTML = `<p>Something went wrong!!</p>`
    document.getElementById('search-bar').value =""
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let { value } = document.getElementById("search-bar");

  fetch(`${pokeApi}/${value.toLowerCase()}`)
    .then((response) => response.json())
    .then(populatePokemonDiv)
    .catch(errorCleanUp)
  value = ""
});
