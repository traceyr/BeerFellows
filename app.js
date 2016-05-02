//globals
var allDrinks = [];
var selectedDrinks = [];

//object constructor
function Drink(liquor, feeling, flavor) {
  this.liquor = liquor;
  this.feeling = feeling;
  this.flavor = flavor;
  allDrinks.push(this);
}

var screwDriver = new Drink('vodka', 'happy', 'sweet');
var ginTonic = new Drink('gin', 'casual', 'triedandtrue');
var teqSunrise = new Drink('tequila', 'angry', 'adventurous');

//for loop to go through each index of object array
//inside click handler

var testBox = document.getElementById('q1box');
testBox.value = "vodka";
testBox.addEventListener('click', clickQ1Handler);

function clickQ1Handler(event) {
  for (var i = 0; i < allDrinks.length; i++) {
    if (event.target.value === allDrinks[i].liquor) {
      selectedDrinks.push(allDrinks[i]);
      console.log(allDrinks[i]);
    }
  }
}

var testBoxQ2 = document.getElementById('q2box');
testBoxQ2.value = 'casual';
testBoxQ2.addEventListener('click', clickQ2Handler);

function clickQ2Handler(event) {
  for (var i = 0; i < allDrinks.length; i++) {
    if (event.target.value !== selectedDrinks[i].feeling) {
      selectedDrinks.push(allDrinks[i]);
      console.log(allDrinks[i]);
    }
    if (event.target.value === allDrinks[i].feeling) {
      selectedDrinks.push(allDrinks[i]);
      console.log(allDrinks[i]);
    }
  }
}
