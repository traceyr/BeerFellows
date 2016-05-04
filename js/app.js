'use strict';

var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');
var btnThree = document.getElementById('btnThree');
var btnFour = document.getElementById('btnFour');
var btnFive = document.getElementById('btnFive');
var btnSix = document.getElementById('btnSix');
var getQuestions = document.getElementById('qName');
var qAnswers = document.getElementById('qAnswers');

//globals
var allDrinks = [];
var selectedDrinks = [];
var questionsArray = ['What type of liquor do you want?', 'How are you feeling?', ' What\'s your flavor?'];
var answersArray = [['beer', 'gin', 'rum', 'tequila', 'vodka', 'whiskey'], ['adventurous', 'party', 'triedandtrue'], ['sour', 'strong', 'sweet']];

//object constructor
function Drink(drinkName, liquor, feeling, flavor, imageSrc, ingredients) {
  this.drinkName = drinkName;
  this.liquor = liquor;
  this.feeling = feeling;
  this.flavor = flavor;
  this.imageSrc = '<img src="' + imageSrc + '" alt="' + this.drinkName + '" id="' + this.drinkName + '">';
  this.ingredients = ingredients;
  this.like = false;
  this.disLike = false;
  allDrinks.push(this);
}

var screwDriver = new Drink('Screwdriver', 'vodka', 'triedandtrue', 'sweet', 'img/screwdriver.png', ['Vodka', 'Orange Juice']);
var ginTonic = new Drink('Gin and Tonic', 'gin', 'triedandtrue', 'sour', 'img/gin-and-tonic.png', ['Gin', 'Tonic']);
var teqSunrise = new Drink('Tequila Sunrise', 'tequila', 'adventurous', 'sweet', 'img/tequila-sunrise.png', ['Tequila', 'Orange Juice', 'Cherry Grenadine']);
var amf = new Drink('Adios Mother F****r', 'tequila', 'party', 'strong', 'img/amf.png', ['Tequila', 'Vodka', 'Triple Sec', 'Gin', 'Blue Curacao', 'Sprite', 'Sour Mix']);
var birthdayCake = new Drink('Birthday Cake Shot', 'vodka', 'party', 'sweet', 'img/birthday-cake.png', ['Baileys Irish Cream', 'Smirnoff Cake Flavored Vodka', 'Whipped Cream', 'Sprinkles']);
var bloodyMary = new Drink('Bloody Mary', 'vodka', 'triedandtrue', 'strong', 'img/bloody-mary.png', ['']);
var blueMoon = new Drink('Blue Moon', 'beer', 'triedandtrue', 'strong', 'img/blue-moon.png', ['']);
var cadMargarita = new Drink('Cadillac Margarita', 'tequila', 'party', 'sour', 'img/cadillac-margarita.png', ['Tequila', 'Grand Marnier', 'Lime Juice', 'Salt on the Rim']);
var ciroc = new Drink('Ciroc', 'vodka', 'party', 'strong', 'img/ciroc.png', ['Ciroc Vodka']);
var cosmo = new Drink('Cosmo', 'vodka', 'triedandtrue', 'sour', 'img/cosmo.png', ['']);
var cubaLibre = new Drink('Cuba Libre', 'rum', 'triedandtrue', 'sweet', 'img/cuba-libre.png', ['Rum', 'Coke', 'Lime']);
var donJulio = new Drink('Don Julio', 'tequila', 'party', 'strong', 'img/don-julio.png', ['Don Julio Blanco Tequila']);
var duckFart = new Drink('Duck Fart', 'whiskey', 'party', 'sweet', 'img/duck-fart.png', ['Whiskey', 'Baileys Irish Cream', 'Kahlua']);
var elecTea = new Drink('Electric Iced Tea', 'gin', 'adventurous', 'strong', 'img/electric-iced-tea.png', ['Gin', 'Vodka', 'Light Rum', 'Tequila', 'Blue Curacao', 'Sour Mix', 'Lemon-lime Soda']);
var fourHorse = new Drink ('The Four Horsemen', 'whiskey', 'adventurous', 'strong', 'img/four-horsemen.png', ['']);
var ginAndJuice = new Drink('Gin and Juice', 'gin', 'triedandtrue', 'sweet', 'img/gin-and-juice.png', ['']);
var greyGoose = new Drink('Grey Goose', 'vodka', 'party', 'strong', 'img/grey-goose.png', ['']);
var hefe = new Drink('Hefeweizen', 'beer', 'triedandtrue', 'strong', 'img/hefe.png' , ['']);
var hennessy = new Drink('Hennessy', '', 'triedandtrue', 'strong', 'img/hennessy.png', ['']);
var ipa = new Drink('IPA', 'beer', 'triedandtrue', 'strong', 'img/ipa.png', ['']);
var jackDaniels = new Drink('Jack Daniels', 'whiskey', 'triedandtrue', 'strong', 'img/jack-daniels.png', ['Jack Daniels Whiskey']);
var jameson  = new Drink('Jameson', 'whiskey', 'triedandtrue', 'strong', 'img/jameson.png', ['Jameson Whiskey']);
var longIsland = new Drink('Long Island', 'gin' 'party', 'strong', 'img/long-island.png', [''] )

function startButtonHandler(event) {
  document.getElementById('introPage').style.display = 'none';
  document.getElementById('gamePage').style.display = 'flex';
  getQuestions.textContent = questionsArray[0];
  btnOne.id = answersArray[0][0];
  btnTwo.id = answersArray[0][1];
  btnThree.id = answersArray[0][2];
  btnFour.id = answersArray[0][3];
  btnFive.id = answersArray[0][4];
  btnSix.id = answersArray[0][5];
  btnOne.textContent = answersArray[0][0];
  btnTwo.textContent = answersArray[0][1];
  btnThree.textContent = answersArray[0][2];
  btnFour.textContent = answersArray[0][3];
  btnFive.textContent = answersArray[0][4];
  btnSix.textContent = answersArray[0][5];
  qAnswers.addEventListener('click', clickQ1Handler);
};

function clickQ1Handler(event) {
  btnFour.style.display = 'none';
  btnFive.style.display = 'none';
  btnSix.style.display = 'none';
  for (var i = 0; i < allDrinks.length; i++) {
    if (event.target.id === allDrinks[i].liquor) {
      selectedDrinks.push(allDrinks[i]);
    }
  }
  console.table(selectedDrinks);
  btnOne.id = answersArray[1][0];
  btnTwo.id = answersArray[1][1];
  btnThree.id = answersArray[1][2];
  btnOne.textContent = answersArray[1][0];
  btnTwo.textContent = answersArray[1][1];
  btnThree.textContent = answersArray[1][2];
  qAnswers.removeEventListener('click', clickQ1Handler);
  qAnswers.addEventListener('click', clickQ2Handler);
  return selectedDrinks;
}

function clickQ2Handler(event) {
  var result = [];
  for (var i = 0; i < selectedDrinks.length; i++) {
    if (event.target.id === selectedDrinks[i].feeling) {
      result.push(selectedDrinks[i]);
    }
    selectedDrinks = result;
  }
  console.log('feeling result');
  console.table(selectedDrinks);
  btnOne.id = answersArray[2][0];
  btnTwo.id = answersArray[2][1];
  btnThree.id = answersArray[2][2];
  btnOne.textContent = answersArray[2][0];
  btnTwo.textContent = answersArray[2][1];
  btnThree.textContent = answersArray[2][2];
  qAnswers.removeEventListener('click', clickQ2Handler);
  qAnswers.addEventListener('click', clickQ3Handler);
  return selectedDrinks;
}

function clickQ3Handler(event) {
  var testResult = [];
  for (var i = 0; i < selectedDrinks.length; i++) {
    if (event.target.id === selectedDrinks[i].flavor) {
      testResult.push(selectedDrinks[i]);
    }
    selectedDrinks = testResult;
    console.table(selectedDrinks);
  }
  qAnswers.removeEventListener('click', clickQ3Handler);
  return selectedDrinks;
}

var startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', startButtonHandler);
