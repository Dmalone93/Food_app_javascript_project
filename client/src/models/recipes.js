const RequestHelper = require('../helpers/request_helpers.js');
const PubSub = require('../helpers/pub_sub.js');
const SelectView = require('../views/select_view.js');


const Recipes = function(url, recipeBookUrl){

  this.url = url;
  this.recipeBookUrl = recipeBookUrl;
  this.request = new RequestHelper(this.url);
  this.bookRequest = new RequestHelper(this.recipeBookUrl);
  this.recipes = [];
}

Recipes.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:diet-selected', (event) => {
    const diet = event.detail;
    const foundDiet = this.findByDiet(diet);
    PubSub.publish('Recipes:recipe-by-diet', foundDiet)
  })
  PubSub.subscribe('RecipeDetailView:recipe-submitted', (event) => {
    this.createBook(event.detail);
  });
};


Recipes.prototype.getBookData = function(){
  this.bookRequest.get()
  .then((bookRecipes) => {
    PubSub.publish('Recipes:all-book-data', bookRecipes)
  })
  .catch(console.error);
}

Recipes.prototype.getData = function(){
  this.request.get()
  .then((recipes) => {
    this.recipes = recipes;
    PubSub.publish('Recipes:all-data', recipes)
  })
  .catch(console.error);
}

Recipes.prototype.findByDiet = function(searchDiet){
  const foundDiet = this.recipes.filter((diet) => {
    return diet.diet === searchDiet;
  })
  return foundDiet;
}



module.exports = Recipes;
