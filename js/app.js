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
    //Create pokemon ID
      const pokemonID = $('<p>').text("#"+data.id)
    //Create pokemon name
      const pokemonName = $('<p>').text(data.name).addClass('capitalize-name')
    //Create pokemon category
    //Create pokemon height (from decimeters to feet)
      const pokemonHeight = $('<p>').text((data.height/3.048).toFixed(2)+" feet tall")
    //Create pokemon weight (from hectograms to kilograms)
      const pokemonWeight = $('<p>').text(data.weight/10+" kilograms")
    //Create pokemon abilities
      for (let i = 0; i < data.abilities.length; i++) {
        const pokemonAbilities = $('<p>')
          .text(data.abilities[i].ability.name)
          .addClass('capitalize-name')
        $(pokemonWeight).append(pokemonAbilities)
      }
    //Create pokemon sprites
      const pokemonSprite = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite')
    //create pokemon types
      const type1 = $('<p>')
        .text(data.types[0].type.name)
        .addClass('capitalize-name')
    //Some pokemon do not have 2 types and thus return  2nd type as undefined; if not undefined, then list second type
      if (data.types[1] !== undefined) {
        console.log('2nd Type CONFIRMED');
        const type2 = $('<p>')
          .text(data.types[1].type.name)
          .addClass('capitalize-name')
        $(type1)
          .append(type2)
      } else if (data.types[1] === undefined) {
        console.log('2nd Type UNDEFINED');
      }

      // for(let i = 0; i <= 76; i++){
      //     const pokemonMoves = $('<p>').text(data.moves[i].move.name).addClass('sprite')
      //     $('#pokemon_search').append(pokemonMoves)
      // }

      $('#pokemon_search')
        .append(pokemonSprite)
        .append(pokemonID)
        .append(pokemonName)
        .append(type1)
        .append(pokemonHeight)
        .append(pokemonWeight)
        // .append(pokemonAbilities)

    },
    () => {
      console.log('Bad request');
    }
  )

  })

})
