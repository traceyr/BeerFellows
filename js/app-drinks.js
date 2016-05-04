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

for (var i = 0; i < allDrinks.length; i++) {
  var imgDiv = document.getElementById('allImg');
  var createUl = document.createElement('ul');
  imgDiv.appendChild(createUl);
  var createLiImages = document.createElement('li');
  createLiImages.innerHTML = allDrinks[i].imageSrc;
  createUl.appendChild(createLiImages);
  var liName = document.createElement('li');
  liName.textContent = allDrinks[i].drinkName;
  createUl.appendChild(liName);
  var liIngredients = document.createElement('li');
  createUl.appendChild(liIngredients);
  liIngredients.textContent = 'Ingredient List:';
  var ingUl = document.createElement('ul');
  createUl.appendChild(ingUl);
  for (var j = 0; j < allDrinks[i].ingredients.length; j++) {
    var ingredientsLi = document.createElement('li');
    ingredientsLi.textContent = allDrinks[i].ingredients[j];
    ingUl.appendChild(ingredientsLi);
  }
  var button = document.createElement('button');
  var tn = document.createTextNode('Add Review');
  button.appendChild(tn);
  button.class = 'review-buttons';
  imgDiv.appendChild(button);
}
