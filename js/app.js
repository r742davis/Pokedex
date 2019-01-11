$(() => {

$('#submit_value').on('click', (data) => {
const pokemonInput = $('#input').val()
console.log(pokemonInput);

const promise = $.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/"+pokemonInput+"/"
});

promise.then(
  (data) => {
    console.log(data);
    console.log(data.sprites);
    const pokemonSprite = $('<img>').attr('src', data.sprites.front_default)
    $('#pokemon_search').append(pokemonSprite)
  },
  () => {
    console.log('Bad request');
  }
)

})

})
