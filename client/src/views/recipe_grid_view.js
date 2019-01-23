const PubSub = require('../helpers/pub_sub.js');
const RecipeThumbnailView = require('./recipe_thumbnail_view.js');
const RecipeDetailView = require('./recipe_detail_view.js')

const RecipeGridView = function (container) {
  this.container = container;
};


RecipeGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {
    this.render(event.detail);
    // (event.detail);
  });

  PubSub.subscribe('Recipes:recipe-by-diet', (event) => {
    this.renderCategory(event.detail);
    console.log(event.detail);
  });


  PubSub.subscribe('Recipes:all-book-data', (event) => {
    // const allBookRecipes = this.render(event.detail);
    //
    // recipe = this.renderRecipe(this.singleRecipe)
    // PubSub.publish('RecipeGridView:recipe-selected', recipe);
  });

};

//check if all diet types in the recipes in the render function are the same. Then you dont need to limit the recipes. If any of diet types are different from each other.
//Then you want to limit the recipes.
RecipeGridView.prototype.renderCategory = function (recipes) {
  this.container.innerHTML = '';
  recipes.forEach((recipe) => {
    const recipeThumbnailView = new RecipeThumbnailView(this.container);
    recipeThumbnailView.render(recipe);
  });
};

RecipeGridView.prototype.render = function (recipes) {
  const limitedRecipes = this.limitRecipes(recipes)
  console.log('limitedRecipes', limitedRecipes);
  limitedRecipes.forEach((recipe) => {
    const recipeThumbnailView = new RecipeThumbnailView(this.container);
    recipeThumbnailView.render(recipe);
  });
};

RecipeGridView.prototype.limitRecipes = function(recipes){
  console.log('recipes', recipes);
  const randomNumbers = [];
  for(let i=0; i < 6; i++){
    const randomNumber = Math.floor(Math.random() * recipes.length)
    randomNumbers.push(randomNumber);
  };

  const limitedRecipes = [];
  randomNumbers.forEach((randomNumber) => {

    const recipe = recipes[randomNumber];
    limitedRecipes.push(recipe);
  });

  return limitedRecipes;
};

RecipeGridView.prototype.renderRecipe = function(recipe){
  const recipeDetail = new RecipeDetailView()
  const recipeDiv = recipeDetail.createRecipe(recipe);
  this.container.appendChild(recipeDiv)
};


module.exports = RecipeGridView;
