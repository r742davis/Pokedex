$(() => {

//Website Organization (Divs, Images, Sections)//





//////////////




$('#submit_value').on('click', (data) => {
  const pokemonInput = $('#input').val().toLowerCase()
  console.log(pokemonInput);

  const promise = $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/"+pokemonInput+"/"
  });

  promise.then(
    (data) => {
      console.log(data);
      //Create pokemon name
      //Create pokemon sprites
      const pokemonSprite = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite')
      //create pokemon types
      const type1 = $('<p>').text(data.types[0].type.name)

      //Some pokemon do not have 2 types and thus return  2nd type as undefined; if not undefined, then list second type
      if (data.types[1] !== undefined) {
        console.log('Yasssssss');
        const type2 = $('<p>').text(data.types[1].type.name)
        $(type1)
          .append(type2)
      } else if (data.types[1] === undefined) {
        console.log('Boooo bitch');
      }

      // for(let i = 0; i <= 76; i++){
      //     const pokemonAbilities = $('<p>').text(data.moves[i].move.name).addClass('sprite')
      //     $('#pokemon_search').append(pokemonAbilities)
      // }

      $('#pokemon_search')
        .append(pokemonSprite)
        .append(type1)



    },
    () => {
      console.log('Bad request');
    }
  )

  })

})
