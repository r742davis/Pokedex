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
          //Create pokemon height (from decimeters to ft)
          const pokemonHeight = $('<p>').text((data.height / 3.048).toFixed(2) + " ft")
          //Create pokemon weight (from hectograms to kilograms)
          const pokemonWeight = $('<p>').text(data.weight / 10 + " kg")
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
              console.log(data);
              console.log(data.id)
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
    //Create functions that generate random numbers from 0 to 802
    let randomNum = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let randomPokemonID = () => {
      return randomNum(0, 718)
    }
    let pokemonIndexNum = randomPokemonID();
    //Put all pokemon creation in one function so that I can click previous or next buttons and create the previous/next pokemon
    const pokemonCreator = () => {

    let numOfPokemon = 802;

    let promise = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokemonIndexNum + "/",
      method: "GET"
    })

    let promise2 = $.ajax ({
      url: "https://pokeapi.co/api/v2/pokemon-species/" + pokemonIndexNum + "/",
      method: "GET"
    })

    if (pokemonDisplayBox === true) {
      promise.then(
        (data) => {
          pokemonDisplayBox = false;
          //Create pokemon ID
          let pokemonID = $('<h2>').text("#" + data.id)
          //Create pokemon name
          let pokemonName = $('<h2>').text(data.name).addClass('capitalize-name')
          //Create pokemon height (from decimeters to ft)
          const heightTitle = $('<h3>').text('Height')
          let pokemonHeight = $('<p>')
            .text((data.height / 3.048).toFixed(2) + " ft")
            .prepend(heightTitle)
          //Create pokemon weight (from hectograms to kilograms)
          const weightTitle = $('<h3>').text('Weight')
          let pokemonWeight = $('<p>')
            .text(data.weight / 10 + " kg")
            .prepend(weightTitle)

          //Create pokemon abilities
          const abilitiesTitle = $('<h3>').text('Abilities')
          const abilitiesDiv = $('<div>')
            .prepend(abilitiesTitle)
          for (let i = 0; i < data.abilities.length; i++) {
            let pokemonAbilities = $('<p>')
              .text(data.abilities[i].ability.name)
              .addClass('capitalize-name')
            $(abilitiesDiv)
              .append(pokemonAbilities)
          }
          //Create pokemon sprites
          let pokemonSprite = $('<img>')
            .attr('src', data.sprites.front_default)
            .addClass('sprite')
          //create pokemon types
          let typeDiv = $('<div>').addClass('type-div')
          let type1 = $('<p>')
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
            let type2 = $('<p>')
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

//WORK ON PART IF YOU HAVE TIME//
          // //Display previous and next buttons
          // $('.carousel-button').css('display', "block")
          // //Create previous and next buttons
          // $('.next').on('click', () => {
          //   $('#pokemon-display-box').children().remove()
          //   pokemonDisplayBox = true;
          //   pokemonIndexNum++
          //   pokemonCreator();
          //   // if (pokemonID <= numOfPokemon) {
          //   //   $('#pokemon-display-box').children().remove()
          //   //   pokemonDisplayBox = true;
          //   //   // pokemonCurrentIndex++
          //   //   // pokemonCreator();
          //   // } else {
          //   //   $('.carousel-button').css('display', 'none')
          //   // }
          //
          // //Show next pokemon
          //
          // })
          // $('.previous').on('click', () => {
          //   $('#pokemon-display-box').children().remove()

          // })

          const descriptionGenerator = () => promise2.then(
            (data2) => {
            let foundEnglishOnce = false;
            for(let i = 0; i <= data2.flavor_text_entries.length; i++){
              if (data2.flavor_text_entries[i].language.name === "en" && foundEnglishOnce === false){
                let pokemonDescription = $('<p>')
                  .text(data2.flavor_text_entries[i].flavor_text)
                $(divRight)
                  .prepend(pokemonDescription)
                foundEnglishOnce = true;
              }
            }
          });

          const divLeft = $('<div>')
            .addClass('div-left')
            .append(pokemonID)
            .append(pokemonName)
            .append(pokemonSprite)
            .append(typeDiv)
          const divRight = $('<div>')
            .addClass('div-right')
            .append(descriptionGenerator())
            .append(pokemonHeight)
            .append(pokemonWeight)
            .append(abilitiesDiv)
          $(typeDiv)
            .prepend($('<h3>').text('Type'))
            .append(type1)

          $('#pokemon-display-box')
            .append(divLeft)
            .append(divRight)

          //Wrap sprite with div
          $(pokemonSprite).wrap("<div class='sprite-wrap' />");
        },
        () => {
          console.log('Bad request');
        },
      )
    }
  }
  pokemonCreator();

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
