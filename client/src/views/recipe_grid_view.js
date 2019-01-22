const PubSub = require('../helpers/pub_sub.js');
const RecipeThumbnailView = require('./recipe_thumbnail_view.js');
const RecipeDetailView = require('./recipe_detail_view.js')

const RecipeGridView = function (container, singleRecipe) {
  this.container = container;
  this.singleRecipe = singleRecipe;
};


RecipeGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {
    this.render(event.detail);
    // console.log(event.detail);
  });

  PubSub.subscribe('Recipes:recipe-by-diet', (event) => {
    console.log('hello', event.detail);
    this.render(event.detail);
  })

   recipe = this.renderRecipe(this.singleRecipe)
   console.log(event);
  PubSub.publish('RecipeGridView:recipe-selected', recipe);
};

RecipeGridView.prototype.render = function (recipes) {
  const recipeThumbnailView = new RecipeThumbnailView(this.singleRecipe);
  recipes.forEach((recipe) => recipeThumbnailView.render(recipe));

};

RecipeGridView.prototype.renderRecipe = function(recipe){
const recipeDetail = new RecipeDetailView()
const recipeDiv = recipeDetail.createRecipe(recipe);
this.container.appendChild(recipeDiv)
};


module.exports = RecipeGridView;
