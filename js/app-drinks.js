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

var screwDriver = new Drink('Screwdriver', 'vodka', 'tried & true', 'sweet', 'img/screwdriver.png', ['Vodka and Orange Juice']);
var ginTonic = new Drink('Gin and Tonic', 'gin', 'tried & true', 'sour', 'img/gin-and-tonic.png', ['Gin and Tonic']);
var teqSunrise = new Drink('Tequila Sunrise', 'tequila', 'adventurous', 'sweet', 'img/tequila-sunrise.png', ['Tequila, Orange Juice, and Cherry Grenadine']);
var amf = new Drink('Adios Mother F****r', 'tequila', 'party', 'strong', 'img/amf.png', ['Tequila, Vodka, Triple Sec, Gin, Blue Curacao, Sprite, andSour Mix']);
var birthdayCake = new Drink('Birthday Cake Shot', 'vodka', 'party', 'sweet', 'img/birthday-cake.png', ['Baileys Irish Cream, Smirnoff Cake Flavored Vodka, Whipped Cream and Sprinkles']);
var bloodyMary = new Drink('Bloody Mary', 'vodka', 'tried & true ', 'strong', 'img/bloody-mary.png', ['Vodka, Tomato Juice, Worcestershire Sauce, Tabasco, Celery, Salt & Pepper.']);
var blueMoon = new Drink('Blue Moon', 'beer', 'tried & true ', 'strong', 'img/blue-moon.png', ['Blue Moon Belgian White is a Belgian-style witbier brewed by Blue Moon Brewing Co. originally in Golden, Colorado, and launched in 1995']);
var cadMargarita = new Drink('Cadillac Margarita', 'tequila', 'party', 'sour', 'img/cadillac-margarita.png', ['Tequila, Grand Marnier, Lime Juice and Salt on the Rim']);
var ciroc = new Drink('Ciroc', 'vodka', 'party', 'strong', 'img/ciroc.png', ['Ciroc Vodka']);
var cosmo = new Drink('Cosmo', 'vodka', 'party', 'sour', 'img/cosmo.png', ['Vodka, Triple Sec, Cranberry Juice, and Lime Juice']);
var cubaLibre = new Drink('Cuba Libre', 'rum', 'tried & true ', 'sweet', 'img/cuba-libre.png', ['Rum, Coke and Lime']);
var donJulio = new Drink('Don Julio', 'tequila', 'party', 'strong', 'img/don-julio.png', ['Don Julio Blanco Tequila']);
var duckFart = new Drink('Duck Fart', 'whiskey', 'party', 'sweet', 'img/duck-fart.png', ['Whiskey, Baileys Irish Cream, and Kahlua']);
var elecTea = new Drink('Electric Iced Tea', 'gin', 'adventurous', 'sour', 'img/electric-iced-tea.png', ['Gin, Vodka, Light Rum, Tequila, Blue Curacao, Sour Mix, and Lemon-lime Soda']);
var fourHorse = new Drink ('The Four Horsemen', 'whiskey', 'adventurous', 'strong', 'img/four-horsemen.png', ['Jim Beam, Jack Daniels, Johnnie Walker and Jose Cuervo']);
var ginAndJuice = new Drink('Gin and Juice', 'gin', 'party', 'sweet', 'img/gin-and-juice.png', ['Gin and Juice']);
var greyGoose = new Drink('Grey Goose', 'vodka', 'party', 'strong', 'img/grey-goose.png', ['Grey Goose Vodka']);
var hefe = new Drink('Hefeweizen', 'beer', 'tried & true ', 'strong', 'img/hefe.png' , ['Wheat beer is a beer, usually top-fermented, which is brewed with a large proportion of wheat relative to the amount of malted barley.']);
var hennessy = new Drink('Hennessy', 'whiskey', 'adventurous', 'strong', 'img/hennessy.png', ['Hennessy, is a cognac house with headquarters in Cognac, France, founded in 1765']);
var ipa = new Drink('IPA', 'beer', 'tried & true ', 'strong', 'img/ipa.png', ['India pale ale (IPA) is a hoppy beer style within the broader category of pale ale.']);
var jackDaniels = new Drink('Jack Daniels', 'whiskey', 'tried & true ', 'strong', 'img/jack-daniels.png', ['Jack Daniels Whiskey']);
var jameson  = new Drink('Jameson', 'whiskey', 'tried & true ', 'strong', 'img/jameson.png', ['Jameson Whiskey']);
var longIsland = new Drink('Long Island', 'gin', 'party', 'strong', 'img/long-island.png', ['Vodka, Gin, Rum, Tequila, Triple Sec, Cola and Lemon Juice']);
var manhattan = new Drink('Manhattan', 'whiskey', 'tried & true', '', 'img/manhattan.png', ['Whiskey, Vermouth, Bitters and a Maraschino Cherry']);
var martini = new Drink('Martini', 'gin', 'tried & true', 'strong', 'img/martini.png', ['Gin, Vermouth, Lemon Twist For Garnish and an Olive (optional)']);
var mojito = new Drink('Mojito', 'rum', 'party', 'sweet', 'img/mojito.png', ['Rum, Lime Juice, Mint Leaves, Club Soda, Lime Wedge and Sugar']);
var oe = new Drink('Olde English', 'beer', 'tried & true', 'strong', 'img/oe.png', ['Olde English 800 is a brand of American malt liquor produced by the Miller Brewing Company']);
var patron = new Drink('Patron', 'tequila', 'adventurous', 'strong', 'img/patron.png', ['Patron Silver Tequila']);
var pbr = new Drink('PBR', 'beer', 'tried & true', 'strong', 'img/pbr.png', ['Pabst Blue Ribbon is a beer sold by Pabst Brewing Company, established in Milwaukee, Wisconsin in 1844 and currently based in Los Angeles.']);
var rr = new Drink('R&R', 'whiskey', 'adventurous', 'strong', 'img/r-r.png', ['Full-flavoured and peppery with creamy maple syrup, clean oak, hints of rose petals, dark fruit, and tangy oranges.']);
var rainier = new Drink('Rainier', 'beer', 'tried & true', 'strong', 'img/rainier.png', ['Pure spring waters combine with golden barley and verdant hops to produce a beer rich in taste and texture.']);
var rumAndCoke = new Drink('Rum and Coke', 'rum', 'tried & true', 'sweet', 'img/rum-and-coke.png', ['Rum, and Coke']);
var scoobySnack = new Drink('Scooby Snacks', 'rum', 'adventurous', '', 'img/scooby-snack.png', ['Coconut Rum, Melon Liqueur, Pineapple Juice and Heavy Cream']);
var sexOnTheBeach = new Drink('Sex on the Beach', 'vodka', 'party', 'sweet', 'img/sex-on-the-beach.png', ['Vodka, Peach Schnapps, Orange Juice, Cranberry Juice']);
var singaporeSling = new Drink('Singapore Sling', 'gin', 'adventurous', 'sweet', 'img/singapore-sling.png', ['Gin, Pineapple Juice, Grenadine, Club Soda, Lime Wedge and a Cherry']);
var tequilaPineapple = new Drink('Tequila Pineapple', 'tequila', 'tried & true', 'sweet', 'img/tequila-pineapple.png', ['Tequila, Pineapple Juice']);
var tokyoTea = new Drink('Tokyo Tea', 'rum', 'adventurous', 'strong', 'img/tokyo-tea.png', ['Vodka, Rum, Gin, Tequila, Triple Sec, and Melon Liqueur']);
var whiskeySour = new Drink('Whiskey Sour', 'whiskey', 'party', 'sour', 'img/whiskey-sour.png', ['Whiskey, Sour Mix, Lemon Slice and a Cherry']);
var whiteRussian = new Drink('White Russian', 'vodka', 'tried & true', 'strong', 'img/white-russian.png', ['Vodka, Kahlua, and Heavy Cream']);

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

//creating form
(function createForm() {
  var createForm = document.createElement('form');
  createForm.id = 'form-container';
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
  textArea.setAttribute('name', 'areaForText');
  textArea.setAttribute('id', 'text-area');
  createForm.appendChild(textArea);

  var addReviewBtn = document.createElement('input');
  addReviewBtn.setAttribute('type', 'button');
  addReviewBtn.id = 'addReviewBtn';
  addReviewBtn.value = 'Add Review';
  createForm.appendChild(addReviewBtn);
})();

//creating ing List
(function createListOfIng(){
  for (var i = 0; i < allDrinks.length; i++) {
    var createUl = document.createElement('ul');
    createUl.id = 'number' + [i] + '-container';
    createUl.className = 'drink-container';
    imgDiv.appendChild(createUl);
    var createImgDiv = document.createElement('div');
    createImgDiv.className = 'img-container';
    createUl.appendChild(createImgDiv);

    // var createLiImages = document.createElement('li');
    // createLiImages.innerHTML = allDrinks[i].imageSrc;
    // createImgDiv.appendChild(createLiImages);

    var aTag = document.createElement('a');
    aTag.setAttribute('href', '#form-container');
    aTag.innerHTML = allDrinks[i].imageSrc;
    createImgDiv.appendChild(aTag);

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

function addReviewHandler(e){
  console.log(e.target.value);
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
  text.textContent = '';
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
