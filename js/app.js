'use strict';
alertify.alert('Warning: You should be at least 21 to drink and by no means are we promoting under age drinking.');
var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');
var btnThree = document.getElementById('btnThree');
var btnFour = document.getElementById('btnFour');
var btnFive = document.getElementById('btnFive');
var btnSix = document.getElementById('btnSix');
var getQuestions = document.getElementById('qName');
var qAnswers = document.getElementById('qAnswers');
var resultsDiv = document.getElementById('resultsDiv');
var resultsBtn = document.getElementById('resultsBtn');
var qName = document.getElementById('qName');
var buttonNext = document.createElement('button');
var buttonPrevious = document.createElement('button');
var buttonNext = document.createElement('button');
var buttonPrevious = document.createElement('button');
var imageClick = 0;

//globals
var allDrinks = [];
var selectedDrinks = [];
var questionsArray = ['What type of liquor do you want?', 'How are you feeling?', ' What\'s your flavor?'];
var answersArray = [['beer', 'gin', 'rum', 'tequila', 'vodka', 'whiskey'], ['adventurous', 'party', 'tried & true'], ['sour', 'strong', 'sweet']];

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

var screwDriver = new Drink('Screwdriver', 'vodka', 'tried & true', 'sweet', 'img/screwdriver.png', ['Vodka', 'Orange Juice']);
var ginTonic = new Drink('Gin and Tonic', 'gin', 'tried & true', 'sour', 'img/gin-and-tonic.png', ['Gin', 'Tonic']);
var teqSunrise = new Drink('Tequila Sunrise', 'tequila', 'adventurous', 'sweet', 'img/tequila-sunrise.png', ['Tequila', 'Orange Juice', 'Cherry Grenadine']);
var amf = new Drink('Adios Mother F****r', 'tequila', 'party', 'strong', 'img/amf.png', ['Tequila', 'Vodka', 'Triple Sec', 'Gin', 'Blue Curacao', 'Sprite', 'Sour Mix']);
var birthdayCake = new Drink('Birthday Cake Shot', 'vodka', 'party', 'sweet', 'img/birthday-cake.png', ['Baileys Irish Cream', 'Smirnoff Cake Flavored Vodka', 'Whipped Cream', 'Sprinkles']);
var bloodyMary = new Drink('Bloody Mary', 'vodka', 'tried & true ', 'strong', 'img/bloody-mary.png', ['Vodka', 'Tomato Juice', 'Worcestershire Sauce', 'Tabasco', 'Celery', 'Salt & Pepper']);
var blueMoon = new Drink('Blue Moon', 'beer', 'tried & true ', 'strong', 'img/blue-moon.png', ['Blue Moon Belgian White is a Belgian-style witbier brewed by Blue Moon Brewing Co. originally in Golden, Colorado, and launched in 1995']);
var cadMargarita = new Drink('Cadillac Margarita', 'tequila', 'party', 'sour', 'img/cadillac-margarita.png', ['Tequila', 'Grand Marnier', 'Lime Juice', 'Salt on the Rim']);
var ciroc = new Drink('Ciroc', 'vodka', 'party', 'strong', 'img/ciroc.png', ['Ciroc Vodka']);
var cosmo = new Drink('Cosmo', 'vodka', 'party', 'sour', 'img/cosmo.png', ['Vodka', 'Triple Sec', 'Cranberry Juice', 'Lime Juice']);
var cubaLibre = new Drink('Cuba Libre', 'rum', 'tried & true ', 'sweet', 'img/cuba-libre.png', ['Rum', 'Coke', 'Lime']);
var donJulio = new Drink('Don Julio', 'tequila', 'party', 'strong', 'img/don-julio.png', ['Don Julio Blanco Tequila']);
var duckFart = new Drink('Duck Fart', 'whiskey', 'party', 'sweet', 'img/duck-fart.png', ['Whiskey', 'Baileys Irish Cream', 'Kahlua']);
var elecTea = new Drink('Electric Iced Tea', 'gin', 'adventurous', 'sour', 'img/electric-iced-tea.png', ['Gin', 'Vodka', 'Light Rum', 'Tequila', 'Blue Curacao', 'Sour Mix', 'Lemon-lime Soda']);
var fourHorse = new Drink ('The Four Horsemen', 'whiskey', 'adventurous', 'strong', 'img/four-horsemen.png', ['Jim Beam', 'Jack Daniels', 'Johnnie Walker', 'Jose Cuervo']);
var ginAndJuice = new Drink('Gin and Juice', 'gin', 'party', 'sweet', 'img/gin-and-juice.png', ['Gin', 'Juice']);
var greyGoose = new Drink('Grey Goose', 'vodka', 'party', 'strong', 'img/grey-goose.png', ['Grey Goose Vodka']);
var hefe = new Drink('Hefeweizen', 'beer', 'tried & true ', 'strong', 'img/hefe.png' , ['Wheat beer is a beer, usually top-fermented, which is brewed with a large proportion of wheat relative to the amount of malted barley.']);
var hennessy = new Drink('Hennessy', 'whiskey', 'adventurous', 'strong', 'img/hennessy.png', ['']);
var ipa = new Drink('IPA', 'beer', 'tried & true ', 'strong', 'img/ipa.png', ['India pale ale (IPA) is a hoppy beer style within the broader category of pale ale.']);
var jackDaniels = new Drink('Jack Daniels', 'whiskey', 'tried & true ', 'strong', 'img/jack-daniels.png', ['Jack Daniels Whiskey']);
var jameson  = new Drink('Jameson', 'whiskey', 'tried & true ', 'strong', 'img/jameson.png', ['Jameson Whiskey']);
var longIsland = new Drink('Long Island', 'gin', 'party', 'strong', 'img/long-island.png', ['Vodka', 'Gin', 'Rum', 'Tequila', 'Triple Sec', 'Cola', 'Lemon Juice']);
var manhattan = new Drink('Manhattan', 'whiskey', 'tried & true', '', 'img/manhattan.png', ['Whiskey', 'Vermouth', 'Bitters', 'Maraschino Cherry']);
var martini = new Drink('Martini', 'gin', 'tried & true', 'strong', 'img/martini.png', ['Gin', 'Vermouth', 'Lemon Twist For Garnish', 'Olive (optional)']);
var mojito = new Drink('Mojito', 'rum', 'party', 'sweet', 'img/mojito.png' ['Rum', 'Lime Juice', 'Mint Leaves', 'Club Soda', 'Lime Wedge', 'Sugar']);
var oe = new Drink('Olde English', 'beer', 'tried & true', 'strong', 'img/oe.png', ['Olde English 800 is a brand of American malt liquor produced by the Miller Brewing Company']);
var patron = new Drink('Patron', 'tequila', 'adventurous', 'strong', 'img/patron.png', ['Patron Silver Tequila']);
var pbr = new Drink('PBR', 'beer', 'tried & true', 'strong', 'img/pbr.png', ['Pabst Blue Ribbon is a beer sold by Pabst Brewing Company, established in Milwaukee, Wisconsin in 1844 and currently based in Los Angeles.']);
var rr = new Drink('R&R', 'whiskey', 'adventurous', 'strong', 'img/r-r.png', ['Full-flavoured and peppery with creamy maple syrup, clean oak, hints of rose petals, dark fruit, and tangy oranges.']);
var rainier = new Drink('Rainier', 'beer', 'tried & true', 'strong', 'img/rainier.png', ['Pure spring waters combine with golden barley and verdant hops to produce a beer rich in taste and texture.']);
var rumAndCoke = new Drink('Rum and Coke', 'rum', 'tried & true', 'sweet', 'img/rum-and-coke.png', ['Rum', 'Coke']);
var scoobySnack = new Drink('Scooby Snacks', 'rum', 'adventurous', '', 'img/scooby-snack.png', ['Coconut Rum', 'Melon Liqueur', 'Pineapple Juice', 'Heavy Cream']);
var sexOnTheBeach = new Drink('Sex on the Beach', 'vodka', 'party', 'sweet', 'img/sex-on-the-beach.png', ['Vodka', 'Peach Schnapps', 'Orange Juice', 'Cranberry Juice']);
var singaporeSling = new Drink('Singapore Sling', 'gin', 'adventurous', 'sweet', 'img/singapore-sling.png' ['Gin', 'Pineapple Juice', 'Grenadine', 'Club Soda', 'Lime Wedge', 'Cherry']);
var tequilaPineapple = new Drink('Tequila Pineapple', 'tequila', 'tried & true', 'sweet', 'img/tequila-pineapple.png', ['Tequila', 'Pineapple Juice']);
var tokyoTea = new Drink('Tokyo Tea', 'rum', 'adventurous', 'strong', 'img/tokyo-tea.png', ['Vodka', 'Rum', 'Gin', 'Tequila', 'Triple Sec', 'Melon Liqueur']);
var whiskeySour = new Drink('Whiskey Sour', 'whiskey', 'party', 'sour', 'img/whiskey-sour.png', ['Whiskey', 'Sour Mix', 'Lemon Slice', 'Cherry']);
var whiteRussian = new Drink('White Russian', 'vodka', 'tried & true', 'strong', 'img/white-russian.png' ['Vodka', 'Kahlua', 'Heavy Cream']);

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
  getQuestions.textContent = questionsArray[1];
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
}

function clickQ2Handler(event) {
  getQuestions.textContent = questionsArray[2];
  for(var i = 0; i < selectedDrinks.length; i++) {
    if (event.target.id !== selectedDrinks[i].feeling) {
      selectedDrinks.splice(i, 1);
    }
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
}

function clickQ3Handler(event) {
  qName.style.display = 'none';
  for(var i = 0; i < selectedDrinks.length; i++) {
    if (event.target.id !== selectedDrinks[i].flavor) {
      selectedDrinks.splice(i, 1);
    }
  }
  console.table(selectedDrinks);
  qAnswers.removeEventListener('click', clickQ3Handler);
  resultsBtn.addEventListener('click', clickResultsHandler);
  gamePage.style.display = 'none';
  qAnswers.style.display = 'none';
  resultsBtn.style.display = 'flex';
  buttonPrevious.style.display = 'none';
  renderPreviousBtn();
}
//handle next and previous function should increment or decrement if inded == 0 hide previous button if index === last hide the next button

function clickResultsHandler(event) {
  resultsBtn.style.display = 'none';
  resultsDiv.style.display = 'flex';
  var anchorLeft = document.getElementById('anchorLeft');
  anchorLeft.style.display = 'flex';
  var anchorMid = document.getElementById('anchorMid');
  anchorMid.style.display = 'flex';
  var anchorRight = document.getElementById('anchorRight');
  anchorRight.style.display = 'flex';
  var buttonsContainer = document.getElementById('buttonsContainer');
  buttonsContainer.style.display = 'flex';
  var drinkDiv = document.createElement('div');
  drinkDiv.id = 'drinkDiv';
  var anchorMid = document.getElementById('anchorMid');
  anchorMid.appendChild(drinkDiv);
  //
  var drinkName = document.createElement('h4');
  console.log(selectedDrinks, imageClick);
  drinkName.textContent = selectedDrinks[imageClick].drinkName;
  drinkDiv.appendChild(drinkName);
  //
  var drinkIngredientsList = document.createElement('ul');
  drinkDiv.appendChild(drinkIngredientsList);
//still need image to display
  for (var i = 0; i < selectedDrinks[imageClick].ingredients.length; i++) {
    var drinkIngredientsLi = document.createElement('li');
    drinkIngredientsLi.textContent = selectedDrinks[imageClick].ingredients[i];
    // console.log(selectedDrinks[imageClick].ingredients[i]);
    drinkIngredientsList.appendChild(drinkIngredientsLi);
  }
  //
  var thumbsUp = document.createElement('p');
  thumbsUp.textContent = 'Thumbs Up';
  var thumbsDown = document.createElement('p');
  thumbsDown.textContent = 'Thumbs Down';
  drinkDiv.appendChild(thumbsUp);
  drinkDiv.appendChild(thumbsDown);
  //
}

  //
  // if(imageClick > 0){
  // }

function renderNextBtn(event){
  // var buttonNext = document.createElement('button');
  buttonNext.textContent = 'Next';
  buttonNext.id = 'nextButton';
  var anchorLeft = document.getElementById('anchorLeft');
  anchorLeft.appendChild(buttonNext);
  buttonNext.addEventListener('click', function(){
    imageClick++;
    if (imageClick === 0) {
      buttonNext.style.display = 'flex';
      buttonPrevious.style.display = 'none';
    }else if (imageClick === selectedDrinks.length - 1) {
      buttonNext.style.display = 'none';
      buttonPrevious.style.display = 'flex';
    } else {
      buttonNext.style.display = 'flex';
      buttonPrevious.style.display = 'flex';
    }
    anchorMid.removeChild(drinkDiv);
    clickResultsHandler();
  });
}
renderNextBtn();

function renderPreviousBtn(event){
  // var buttonPrevious = document.createElement('button');
  buttonPrevious.id = 'arrowButton';
  buttonPrevious.textContent = 'Previous';
  var anchorRight = document.getElementById('anchorRight');
  anchorRight.appendChild(buttonPrevious);
  console.log('imageClick = ' + imageClick);
  // buttonPrevious.style.display = 'none';
  buttonPrevious.addEventListener('click', function(){
    // if (imageClick === 0) {
    //   console.log(imageClick);
    //   buttonPrevious.style.display = 'none';
    //   clickResultsHandler();
    imageClick--;
    if (imageClick === 0) {
      buttonNext.style.display = 'flex';
      buttonPrevious.style.display = 'none';
    }else if (imageClick === selectedDrinks.length - 1) {
      buttonNext.style.display = 'none';
      buttonPrevious.style.display = 'flex';
    } else {
      buttonNext.style.display = 'flex';
      buttonPrevious.style.display = 'flex';
    }
    console.log(imageClick);
    anchorMid.removeChild(drinkDiv);
    clickResultsHandler();
  });
}

var startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', startButtonHandler);

//when user answers q3, show 1st result & next button
//on click 'next', show next drink, show next & previous buttons
  //if drinkshown is drinks[0], don't show previous button
  //else show both buttons
