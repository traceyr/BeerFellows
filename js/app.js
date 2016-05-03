//globals
var allDrinks = [];
var selectedDrinks = [];
var questionsArray = ['What type of liquor do you want?', 'How are you feeling?', ' What\'s your flavor?'];
var answersArray = [['beer', 'gin', 'rum', 'tequila', 'vodka', 'whiskey'], ['adventurous', 'party', 'triedandtrue'], ['sour', 'strong', 'sweet']];

//object constructor
function Drink(drinkName, liquor, feeling, flavor/*, imageSrc*/, ingredients) {
  this.drinkName = drinkName;
  this.liquor = liquor;
  this.feeling = feeling;
  this.flavor = flavor;
  // this.imageSrc = '<img src="' + path + '" alt="' + this.drinkName + '" id="' + this.drinkName + '">';
  this.ingredients = ingredients;
  this.like = false;
  this.disLike = false;
  allDrinks.push(this);
}

function questionFunction(event){
  for(var i = 0; i < questionsArray.length; i++){
    var elClicko = document.getElementById('qName');
    elClicko.textContent = questionsArray[i];
  }
}
questionFunction();

var screwDriver = new Drink('Screwdriver', 'vodka', 'triedandtrue', 'sweet', ['Vodka', 'Orange Juice'
]);
var ginTonic = new Drink('Gin and Tonic', 'gin', 'triedandtrue', 'sour' ['Gin', 'Tonic']);
var teqSunrise = new Drink('Tequila Sunrise', 'tequila', 'adventurous', 'sweet', ['Tequila', 'Orange Juice', 'Cherry Grenadine']);
var amf = new Drink('Adios Mother F****r', 'tequila', 'party', 'strong', ['Tequila', 'Vodka', 'Triple Sec', 'Gin', 'Blue Curacao', 'Sprite', 'Sour Mix']);
var mannys = new Drink('Mac & Jack', 'beer', 'adventurous', 'strong', ['Local Brew']);

//for loop to go through each index of object array
//inside click handler

function clickQ1Handler(event) {
  for (var i = 0; i < allDrinks.length; i++) {
    if (event.target.value === allDrinks[i].liquor) {
      selectedDrinks.push(allDrinks[i]);
      console.log(allDrinks[i]);
    }
  }
}

function clickQ2Handler(event) {
  var result = [];
  for (var i = 0; i < selectedDrinks.length; i++) {
    if (event.target.value === selectedDrinks[i].feeling) {
      result.push(selectedDrinks[i]);
    }
  }
  selectedDrinks = result;
  console.log(selectedDrinks);
  return result;
}

var startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', startButtonHandler);

function startButtonHandler(event) {
  document.getElementById('introPage').style.display = 'none';
  document.getElementById('gamePage').style.display = 'flex';
}
var elcicker = document.getElementById('lower-buttons');
elcicker.addEventListener('click', questionFunction);

//CSS Magin
$('.intro-buttons').hover(function () {
  $(this).addClass('magictime puffIn');
});

$(function(){
  $('.css-typing').typed({
    strings: ['First sentence.', 'Second sentence.'],
    typeSpeed: 0
  });
});
