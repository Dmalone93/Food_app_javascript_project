const RecipeDetailView = require('./views/recipe_detail_view.js');
const RecipeGridView = require('./views/recipe_grid_view.js');
const RecipeThumbnailView = require('./views/recipe_thumbnail_view.js');
const Recipes = require('./models/recipes.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const url = 'http://localhost:3000/api/recipes';
  const recipes = new Recipes(url);
  recipes.getData();

  const recipesContainer = document.querySelector('div#recipes');
  const singleRecipe = document.querySelector('div#recipe-container');
  const recipeGridView = new RecipeGridView(recipesContainer, singleRecipe);
  recipeGridView.bindEvents();


const recipesContainer = document.querySelector('div#recipes');
const recipeGridView = new RecipeGridView(recipesContainer);
recipeGridView.bindEvents();

const url = 'http://localhost:3000/api/recipes';

const recipes = new Recipes(url)
recipes.bindEvents();
recipes.getData();

});
