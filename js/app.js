$(() => {

const inputValue = $('#input').val()

const promise = $.ajax({
  url: "https://pokeapi.co/api/v2/encounter-method/"
});

promise.then(
  (data) => {
    console.log(data);
  },
  () => {
    console.log('Bad request');
  }
)

  const Display = {

  }

  const App = {

  }

})
