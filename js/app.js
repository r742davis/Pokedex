$(() => {

  ///////////////////////////////////////////////////////////////////
  //Generate selected (name or number) pokemon with "Submit" button//
  ///////////////////////////////////////////////////////////////////
  let pokemonDisplayBox = true;

  $('#submit-value').on('click', (data) => {
    const pokemonInput = $('#input').val().toLowerCase()

    const promise1 = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonInput + "/",
      method: "GET"
    });

    const promise2 = $.ajax ({
      url: "https://pokeapi.co/api/v2/pokemon-species/" + pokemonInput + "/",
      method: "GET"
    })

    if (pokemonDisplayBox === true) {
      promise1.then(
        (data) => {
          //Create pokemon ID
          const pokemonID = $('<p>').text("#" + data.id)
          const pokemonNumPromise2 = data.id

          //Create pokemon name
          const pokemonName = $('<p>').text(data.name).addClass('capitalize-name')
          //Create pokemon height (from decimeters to feet)
          const pokemonHeight = $('<p>').text((data.height / 3.048).toFixed(2) + " feet tall")
          //Create pokemon weight (from hectograms to kilograms)
          const pokemonWeight = $('<p>').text(data.weight / 10 + " kilograms")
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
          //Create pokemon types and attach type-specific ID
          const typeDiv = $('<div>').addClass('type-div')
          const type1 = $('<p>')
            .text(data.types[0].type.name)
            .addClass('capitalize-name')
          if (type1.text() === "bug") {
            $(type1).attr('id', 'bug')
          } else if (type1.text() === "dark") {
            $(type1).attr('id', 'dark')
          } else if (type1.text() === "dragon") {
            $(type1).attr('id', 'dragon')
          } else if (type1.text() === "electric") {
            $(type1).attr('id', 'electric')
          } else if (type1.text() === "fairy") {
            $(type1).attr('id', 'fairy')
          } else if (type1.text() === "fighting") {
            $(type1).attr('id', 'fighting')
          } else if (type1.text() === "fire") {
            $(type1).attr('id', 'fire')
          } else if (type1.text() === "flying") {
            $(type1).attr('id', 'flying')
          } else if (type1.text() === "ghost") {
            $(type1).attr('id', 'ghost')
          } else if (type1.text() === "grass") {
            $(type1).attr('id', 'grass')
          } else if (type1.text() === "ground") {
            $(type1).attr('id', 'ground')
          } else if (type1.text() === "ice") {
            $(type1).attr('id', 'ice')
          } else if (type1.text() === "normal") {
            $(type1).attr('id', 'normal')
          } else if (type1.text() === "poison") {
            $(type1).attr('id', 'poison')
          } else if (type1.text() === "psychic") {
            $(type1).attr('id', 'psychic')
          } else if (type1.text() === "rock") {
            $(type1).attr('id', 'rock')
          } else if (type1.text() === "steel") {
            $(type1).attr('id', 'steel')
          } else if (type1.text() === "water") {
            $(type1).attr('id', 'water')
          }
          //Some pokemon do not have 2 types and thus return 2nd type as undefined; if not undefined, then list second type
          if (data.types[1] !== undefined) {
            const type2 = $('<p>')
              .text(data.types[1].type.name)
              .addClass('capitalize-name')
            $(typeDiv)
              .append(type2)
            if (type2.text() === "bug") {
              $(type2).attr('id', 'bug')
            } else if (type2.text() === "dark") {
              $(type2).attr('id', 'dark')
            } else if (type2.text() === "dragon") {
              $(type2).attr('id', 'dragon')
            } else if (type2.text() === "electric") {
              $(type2).attr('id', 'electric')
            } else if (type2.text() === "fairy") {
              $(type2).attr('id', 'fairy')
            } else if (type2.text() === "fighting") {
              $(type2).attr('id', 'fighting')
            } else if (type2.text() === "fire") {
              $(type2).attr('id', 'fire')
            } else if (type2.text() === "flying") {
              $(type2).attr('id', 'flying')
            } else if (type2.text() === "ghost") {
              $(type2).attr('id', 'ghost')
            } else if (type2.text() === "grass") {
              $(type2).attr('id', 'grass')
            } else if (type2.text() === "ground") {
              $(type2).attr('id', 'ground')
            } else if (type2.text() === "ice") {
              $(type2).attr('id', 'ice')
            } else if (type2.text() === "normal") {
              $(type2).attr('id', 'normal')
            } else if (type2.text() === "poison") {
              $(type2).attr('id', 'poison')
            } else if (type2.text() === "psychic") {
              $(type2).attr('id', 'psychic')
            } else if (type2.text() === "rock") {
              $(type2).attr('id', 'rock')
            } else if (type2.text() === "steel") {
              $(type2).attr('id', 'steel')
            } else if (type2.text() === "water") {
              $(type2).attr('id', 'water')
            }
          }

          // for(let i = 0; i <= 76; i++){
          //     const pokemonMoves = $('<p>').text(data.moves[i].move.name).addClass('sprite')
          //     $('#pokemon-display-box').append(pokemonMoves)
          // }

          //Attaching all pokemon elements
          $(typeDiv)
            .append(type1)
          $('#pokemon-display-box')
            .append(pokemonSprite)
            .append(pokemonID)
            .append(pokemonName)
            .append(typeDiv)
            .append(pokemonHeight)
            .append(pokemonWeight)
          // .append(pokemonAbilities)
          //Wrap sprite with div
          $(pokemonSprite).wrap("<div class='sprite-wrap' />");

          pokemonDisplayBox = false;

          //Adding descriptions to pokemon
          promise2.then(
            (data) => {
            const pokemonDescription = $('<p>')
              .text(data.flavor_text_entries[1].flavor_text)
            $('#pokemon-display-box')
              .append(pokemonDescription)
          })
        },
        () => {
          console.log('Bad request');
        },
      )
    }
  });

  //////////////////////////////////////////////////////////
  //Generate a random pokemon with "Random Pokemon" button//
  //////////////////////////////////////////////////////////
  $("#random-value").on("click", (data) => {
    //Create functions that generate random numbers from 0 to 718
    const randomNum = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const randomPokemon = () => {
      return randomNum(0, 718)
    }

    const promise = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + randomPokemon() + "/",
      method: "GET"
    })

    if (pokemonDisplayBox === true) {
      promise.then(
        (data) => {
          //Create pokemon ID
          const pokemonID = $('<p>').text("#" + data.id)
          //Create pokemon name
          const pokemonName = $('<p>').text(data.name).addClass('capitalize-name')
          //Create pokemon height (from decimeters to feet)
          const pokemonHeight = $('<p>').text((data.height / 3.048).toFixed(2) + " feet tall")
          //Create pokemon weight (from hectograms to kilograms)
          const pokemonWeight = $('<p>').text(data.weight / 10 + " kilograms")
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
          const typeDiv = $('<div>').addClass('type-div')
          const type1 = $('<p>')
            .text(data.types[0].type.name)
            .addClass('capitalize-name')
          if (type1.text() === "bug") {
            $(type1).attr('id', 'bug')
          } else if (type1.text() === "dark") {
            $(type1).attr('id', 'dark')
          } else if (type1.text() === "dragon") {
            $(type1).attr('id', 'dragon')
          } else if (type1.text() === "electric") {
            $(type1).attr('id', 'electric')
          } else if (type1.text() === "fairy") {
            $(type1).attr('id', 'fairy')
          } else if (type1.text() === "fighting") {
            $(type1).attr('id', 'fighting')
          } else if (type1.text() === "fire") {
            $(type1).attr('id', 'fire')
          } else if (type1.text() === "flying") {
            $(type1).attr('id', 'flying')
          } else if (type1.text() === "ghost") {
            $(type1).attr('id', 'ghost')
          } else if (type1.text() === "grass") {
            $(type1).attr('id', 'grass')
          } else if (type1.text() === "ground") {
            $(type1).attr('id', 'ground')
          } else if (type1.text() === "ice") {
            $(type1).attr('id', 'ice')
          } else if (type1.text() === "normal") {
            $(type1).attr('id', 'normal')
          } else if (type1.text() === "poison") {
            $(type1).attr('id', 'poison')
          } else if (type1.text() === "psychic") {
            $(type1).attr('id', 'psychic')
          } else if (type1.text() === "rock") {
            $(type1).attr('id', 'rock')
          } else if (type1.text() === "steel") {
            $(type1).attr('id', 'steel')
          } else if (type1.text() === "water") {
            $(type1).attr('id', 'water')
          }
          //Some pokemon do not have 2 types and thus return  2nd type as undefined; if not undefined, then list second type
          if (data.types[1] !== undefined) {
            const type2 = $('<p>')
              .text(data.types[1].type.name)
              .addClass('capitalize-name')
            $(typeDiv)
              .append(type2)
            //Determine type for coloring
            if (type2.text() === "bug") {
              $(type2).attr('id', 'bug')
            } else if (type2.text() === "dark") {
              $(type2).attr('id', 'dark')
            } else if (type2.text() === "dragon") {
              $(type2).attr('id', 'dragon')
            } else if (type2.text() === "electric") {
              $(type2).attr('id', 'electric')
            } else if (type2.text() === "fairy") {
              $(type2).attr('id', 'fairy')
            } else if (type2.text() === "fighting") {
              $(type2).attr('id', 'fighting')
            } else if (type2.text() === "fire") {
              $(type2).attr('id', 'fire')
            } else if (type2.text() === "flying") {
              $(type2).attr('id', 'flying')
            } else if (type2.text() === "ghost") {
              $(type2).attr('id', 'ghost')
            } else if (type2.text() === "grass") {
              $(type2).attr('id', 'grass')
            } else if (type2.text() === "ground") {
              $(type2).attr('id', 'ground')
            } else if (type2.text() === "ice") {
              $(type2).attr('id', 'ice')
            } else if (type2.text() === "normal") {
              $(type2).attr('id', 'normal')
            } else if (type2.text() === "poison") {
              $(type2).attr('id', 'poison')
            } else if (type2.text() === "psychic") {
              $(type2).attr('id', 'psychic')
            } else if (type2.text() === "rock") {
              $(type2).attr('id', 'rock')
            } else if (type2.text() === "steel") {
              $(type2).attr('id', 'steel')
            } else if (type2.text() === "water") {
              $(type2).attr('id', 'water')
            }
          }

          //Attaching all pokemon elements
          $(typeDiv)
            .append(type1)
          $('#pokemon-display-box')
            .append(pokemonSprite)
            .append(pokemonID)
            .append(pokemonName)
            .append(typeDiv)
            .append(pokemonHeight)
            .append(pokemonWeight)

          //Wrap sprite with div
          $(pokemonSprite).wrap("<div class='sprite-wrap' />");

        },
        () => {
          console.log('Bad request');
        },
      )
    }

  });

  ////////////////////////////////////////////
  //Reset Pokemon values with "Reset" Button//
  ////////////////////////////////////////////
  $('#reset').on('click', () => {
    $('#pokemon-display-box').children().remove()
    pokemonDisplayBox = true;
    // css('display', 'none')
  })


})
