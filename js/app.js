$(() => {

  $('#pokemon-input').on('submit', (event) => {
    const pokemonInput = $('#pokemon-input').val()
    console.log(pokemonInput);
    event.preventDefault()
  })

  //   const promise = $.ajax({
  //     url: "https://pokeapi.co/api/v2/pokemon/"+pokemonInput+"/"
  //   });
  //
  //   promise.then(
  //     (data) => {
  //       console.log(data);
  //       console.log(pokemonInput);
  //     },
  //     () => {
  //       console.log('Bad request');
  //     }
  //   );
  // })


})
