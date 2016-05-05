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
  this.review = 'No reviews Currently';
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

var imgDiv = document.getElementById('allImg');

for (var i = 0; i < allDrinks.length; i++) {
  var createUl = document.createElement('ul');
  createUl.id = 'number' + [i];
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

}
//form and dropdown with full list of drinks
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

function addReviewHandler(e){
  var text = document.getElementById('text-area').value;
  console.log(text);
  var dropDownId = document.querySelector('select').value;
  console.log(dropDownId);
  for (var x = 0; x < allDrinks.length; x++){
    if (dropDownId === allDrinks[x].drinkName){
      var getUl = document.getElementById('number' + [x]);
      console.log(getUl);
      // var contents = document.getElementById('text-area').innerHTML;
      console.log(allDrinks[x]);
      allDrinks[x].review = text;
      console.log(allDrinks[x].review);
      // createUl.appendChild(reviewLi);

      var reviewLi = document.createElement('li');
      reviewLi.textContent = allDrinks[x].review;
      getUl.appendChild(reviewLi);
      console.log('please work');
    }
    localStorage.setItem('reviewData', JSON.stringify(allDrinks));
  }

}
var testingBtn = document.getElementById('addReviewBtn');
testingBtn.addEventListener('click', addReviewHandler);

// (function checkForLocalStorage(){
//   if(localStorage.userClickData){
//     console.log('Storage Exists');
//     var imagesParsed = JSON.parse(localStorage.userClickData);
//     for(var i = 0; i < imageArr.length; i++){
//       imageArr = imagesParsed;
//     };
//   }else{
//     console.log('Storage does not exist');
//   }
// })();
// document.getElementById('lcClear').addEventListener('click', function(){
//   localStorage.clear();
// });

(function checkLocal() {
  if (localStorage.reviewData) {
    console.log('Local storage exists');
    var drinksParsed = JSON.parse(localStorage.reviewData);
    for(var i = 0; i < allDrinks.length; i++){
      allDrinks = drinksParsed;
    };
  } else {
    console.log('storage does not exist');
  }
  //  else {
  //   console.log('Local storage doesnt exist');
  // }
  // JSON.parse(localStorage.getItem('reviewData'));
})();
