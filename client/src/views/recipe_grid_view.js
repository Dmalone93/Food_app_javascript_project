const PubSub = require('../helpers/pub_sub.js');
const RecipeThumbnailView = require('./recipe_thumbnail_view.js');
const RecipeDetailView = require('./recipe_detail_view.js')
const RecipeBookView = require('./recipe_book_view.js')

const RecipeGridView = function (container) {
  this.container = container;
};


RecipeGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {
    this.render(event.detail);
  });

  PubSub.subscribe('Recipes:recipe-by-diet', (event) => {
    this.renderCategory(event.detail);
    console.log(event.detail);
  });

  createForm = document.querySelector('button.lbl-toggle');
  createForm.addEventListener('click', (event) => {
    form = new RecipeBookView(this.container)
    PubSub.publish('RecipeBookView:recipe-form', form)
    console.log(form);
  })


  PubSub.subscribe('Recipes:all-book-data', (event) => {
    // const allBookRecipes = this.render(event.detail);
    //
    // recipe = this.renderRecipe(this.singleRecipe)
    // PubSub.publish('RecipeGridView:recipe-selected', recipe);
  });

};
RecipeGridView.prototype.renderCategory = function (recipes) {
  this.container.innerHTML = '';
  recipes.forEach((recipe) => {
    const recipeThumbnailView = new RecipeThumbnailView(this.container);
    recipeThumbnailView.render(recipe);
  });
};

RecipeGridView.prototype.render = function (recipes) {
  const limitedRecipes = this.limitRecipes(recipes)
  limitedRecipes.forEach((recipe) => {
    const recipeThumbnailView = new RecipeThumbnailView(this.container);
    recipeThumbnailView.render(recipe);
  });
};

RecipeGridView.prototype.limitRecipes = function(recipes){
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
