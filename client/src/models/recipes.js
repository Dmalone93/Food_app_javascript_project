const RequestHelper = require('../helpers/request_helpers.js');
const PubSub = require('../helpers/pub_sub.js');
const SelectView = require('../views/select_view.js');
const SearchView = require('../views/search_view.js')


const Recipes = function(url, recipeBookUrl){

  this.url = url;
  this.recipeBookUrl = recipeBookUrl;
  this.request = new RequestHelper(this.url);
  this.bookRequest = new RequestHelper(this.recipeBookUrl);
  this.recipes = [];
  this.bookRecipes = [];
}

Recipes.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:diet-selected', (event) => {
    const diet = event.detail;
    const foundDiet = this.findByDiet(diet);
    PubSub.publish('Recipes:recipe-by-diet', foundDiet)
  })
  PubSub.subscribe('RecipeDetailView:recipe-added', (event) => {
    const selectedIndex = event.detail;
    console.log('recipe?', this.recipes[selectedIndex - 1]);
    const recipe = this.recipes[selectedIndex - 1];
    this.createBook(recipe);
    PubSub.publish('Recipes:added-from-api', recipe)
  });
  PubSub.subscribe('SearchView:recipe-search', (event) => {
    const ingredient = event.detail.ingSearch;
    const foundIngredient = this.findIngredient(ingredient);
    PubSub.publish('RecipeDetailView:recipe-by-ingredient', foundIngredient);
  });
};

Recipes.prototype.createBook = function (recipe) {
  this.bookRequest.post(recipe)
  .then((recipeBook) => {
    PubSub.publish('Recipes:added-favourite-receipe', recipeBook);

  })
  .catch(console.error);
// use the this.bookRequest to POST (request_helper) the recipe book collection
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

Recipes.prototype.findIngredient = function(ingredient){
  const includesIngredient = []
  this.recipes.forEach((recipe) => {
    recipe.ingredients.forEach((fullIngredient) => {
      if (fullIngredient.includes(ingredient)){
        if (!includesIngredient.includes(recipe)){
          includesIngredient.push(recipe)
        }
      }
    })
  })
  return includesIngredient;
}



module.exports = Recipes;
