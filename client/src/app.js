const RecipeDetailView = require('./views/recipe_detail_view.js');
const RecipeGridView = require('./views/recipe_grid_view.js');
const RecipeThumbnailView = require('./views/recipe_thumbnail_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');


const recipesContainer = document.querySelector('div#recipes');
const recipeGridView = new RecipeGridView(recipesContainer);
recipeGridView.bindEvents();

const url = 'http://localhost:3000/api/recipes';

const recipes = new Recipes(url)
recipes.bindEvents();
recipes.getData();
});
