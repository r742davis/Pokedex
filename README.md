# Pokemon Pokedex - Project 1 for General Assembly

####Link: https://github.com/r742davis/r742davis.github.io

This is a free-to-use Pokedex created with the PokeAPI!

You can find individual pokemon by either entering their name or number in the "Name/Number" input and clicking submit, or you ca generate a random pokemon by clicking the "Random Pokemon" button.

If you wish to search for a new pokemon, simply press the "Reset" button to clear the viewing field. Then you may search for a pokemon with the 2 previously defined methods.

If you search for a "Random Pokemon," you have the option to see the previous or next pokemon by clicking on the left or right arrows with the pokeballs respectively. You can cycle through the entire array of pokemon if you would like! (Individual search previous/next arrows are currently not functioning due to a bug)

#### Information Displayed

Any search will return multiple points of information about the pokemon including:
- ID number
- Name
- Type(s)
- Description
- Height
- Weight
- Abilities

#### Technologies Used

I utilized HTML, CSS, Javascript, and jQuery to build this app.

#### General Approach

I gave a general structure for the webpage using HTML and CSS. For any elements that were dynamic in nature (appearing/disappearing), I utilized jQuery so I could continuously create or destroy those elements.

#### Technical Issues

One major issue was trying to get the pokemon carousel to work when you individually search for pokemon. The scope of variables could not be resolved. In the random pokemon code, the necessary variable was declared globally because you could randomly generate a number and save it to the necessary variable.

Thank you for using my Pokedex! I hope you enjoy it!

Created By: Richard Davis (General Assembly)
