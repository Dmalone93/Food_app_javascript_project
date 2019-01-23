const PubSub = require('../helpers/pub_sub.js');
const RecipeThumbnailView = require('./recipe_thumbnail_view.js');
const RecipeDetailView = require('./recipe_detail_view.js')
const RecipeBookView = require('./recipe_book_view.js')

const RecipeGridView = function (container, singleRecipe) {
  this.container = container;
  this.singleRecipe = singleRecipe;
};


RecipeGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {
    this.render(event.detail);
  });

  PubSub.subscribe('Recipes:recipe-by-diet', (event) => {
    this.renderCategory(event.detail);
    console.log(event.detail);
  });

  const createForm = document.querySelector('button.lbl-toggle');
  createForm.addEventListener('click', (event) => {
    form = new RecipeBookView(this.container)
    form.renderForm();
  const recipeform = document.querySelector('#recipe-form');
  recipeform.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target);

    const recipeObject = {
      recipe_name: event.target['recipe-name'].value,
      ingredients: event.target['ingredients'].value,
      prep_time: event.target['pret-time'].value,
      cook_time: event.target['cook-time'].value,
      servings: event.target['serving'].value,
      diet: event.target['diet'].value,
      cook_method: event.target['cook-method'].value
    };
    console.log(recipeObject);
    PubSub.publish('RecipeGridView: new-personal-recipe', recipeObject);
  })



  })

};


RecipeGridView.prototype.renderCategory = function (recipes) {
  recipes.forEach((recipe) => {
    const recipeThumbnailView = new RecipeThumbnailView(this.singleRecipe);
    recipeThumbnailView.render(recipe);
  });
};

RecipeGridView.prototype.render = function (recipes) {
  const limitedRecipes = this.limitRecipes(recipes)
  console.log('limitedRecipes', limitedRecipes);
  limitedRecipes.forEach((recipe) => {
    const recipeThumbnailView = new RecipeThumbnailView(this.singleRecipe);
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
