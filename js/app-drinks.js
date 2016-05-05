var allDrinks = [];

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
  this.review = '';
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
var longIsland = new Drink('Long Island', 'gin', 'party', 'strong', 'img/long-island.png', ['']);

var imgDiv = document.getElementById('allImg');

allDrinks.sort(function(a, b){
  var nameA = a.drinkName.toLowerCase();
  var nameB = b.drinkName.toLowerCase();
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else{
    return 0;
  }
});

//creating ing List
(function createListOfIng(){
  for (var i = 0; i < allDrinks.length; i++) {
    var createUl = document.createElement('ul');
    createUl.id = 'number' + [i] + '-container';
    imgDiv.appendChild(createUl);
    var createImgDiv = document.createElement('div');
    createImgDiv.className = 'img-container';
    createUl.appendChild(createImgDiv);
    var createLiImages = document.createElement('li');
    createLiImages.innerHTML = allDrinks[i].imageSrc;
    createImgDiv.appendChild(createLiImages);

    var createLiDiv = document.createElement('div');
    createLiDiv.className = 'text-container';
    createUl.appendChild(createLiDiv);

    var liName = document.createElement('li');
    liName.textContent = allDrinks[i].drinkName;
    createLiDiv.appendChild(liName);
    var liIngredients = document.createElement('li');
    createLiDiv.appendChild(liIngredients);
    liIngredients.textContent = 'Ingredient List:';
    var ingUl = document.createElement('ul');
    createLiDiv.appendChild(ingUl);
    for (var j = 0; j < allDrinks[i].ingredients.length; j++) {
      var ingredientsLi = document.createElement('li');
      ingredientsLi.textContent = allDrinks[i].ingredients[j];
      ingUl.appendChild(ingredientsLi);
    }
    var reviewLi = document.createElement('li');
    reviewLi.textContent = allDrinks[i].review;
    createLiDiv.appendChild(reviewLi);
    reviewLi.id = 'number' + [i];
  }
})();

(function createForm() {
  var createForm = document.createElement('form');
  imgDiv.appendChild(createForm);
  var heading = document.createElement('h2');
  heading.innerHTML = 'Add a Review';
  createForm.appendChild(heading);
  var linebreak = document.createElement('br');
  createForm.appendChild(linebreak);
  var drinkLabel = document.createElement('label');
  drinkLabel.innerHTML = 'Name of Drink';
  createForm.appendChild(drinkLabel);
  var drinkSelect = document.createElement('select');
  drinkSelect.id = 'drink-selection';

  for (var c = 0; c < allDrinks.length; c++) {
    var options = document.createElement('option');
    options.value = allDrinks[c].drinkName;
    var theText = document.createTextNode(allDrinks[c].drinkName);
    options.appendChild(theText);
    drinkSelect.appendChild(options);

  }

  createForm.appendChild(drinkSelect);

  var linebreakTwo = document.createElement('br');
  createForm.appendChild(linebreakTwo);
  var textLabel = document.createElement('label');
  textLabel.innerHTML = 'Your Review';
  createForm.appendChild(textLabel);
  var textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'text-area');
  createForm.appendChild(textArea);

  var addReviewBtn = document.createElement('input');
  addReviewBtn.setAttribute('type', 'button');
  addReviewBtn.id = 'addReviewBtn';
  addReviewBtn.value = 'Add Review';
  createForm.appendChild(addReviewBtn);
})();

function addReviewHandler(){
  var text = document.getElementById('text-area').value;
  var dropDownId = document.querySelector('select').value;
  for (var x = 0; x < allDrinks.length; x++){
    if (dropDownId === allDrinks[x].drinkName){
      allDrinks[x].review = 'Review: ' + text;
      var getUl = document.getElementById('number' + [x]);
      var liForReview = document.createElement('li');
      liForReview.textContent = 'Review: ' + text;
      getUl.appendChild(liForReview);
    }
  }
  localStorage.setItem('reviewData', JSON.stringify(allDrinks));
}

function testingAdd() {
  for(var p = 0; p < allDrinks.length; p++) {
    var getUl = document.getElementById('number' + [p]);
    var liForReview = document.createElement('li');
    liForReview.textContent = allDrinks[p].review;
    getUl.appendChild(liForReview);
  }
}

var testingBtn = document.getElementById('addReviewBtn');
testingBtn.addEventListener('click', addReviewHandler);

(function checkLocal() {
  if (localStorage.reviewData) {
    console.log('Local storage exists');
    allDrinks = JSON.parse(localStorage.reviewData);
    testingAdd();
  } else {
    console.log('Local storage doesnt exist');
  }
  // JSON.parse(localStorage.getItem('reviewData'));
})();
