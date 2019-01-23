const RecipeDetailView = require('./views/recipe_detail_view.js');
const RecipeGridView = require('./views/recipe_grid_view.js');
const RecipeThumbnailView = require('./views/recipe_thumbnail_view.js');
const Recipes = require('./models/recipes.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  ('Javascript Loaded');
  const header = document.querySelector('.searches');
  header.style.backgroundImage = "url('./images/vegetables.jpg')"


  const url = 'http://localhost:3000/api/recipes';

  const recipeBookUrl = 'http://localhost:3000/api/recipeBook'

  const recipes = new Recipes(url, recipeBookUrl);
  recipes.getData();
  recipes.getBookData();
  recipes.bindEvents();
  recipes.createBook();



  const container = document.querySelector('div.recipes');
  const singleRecipe = document.querySelector('div#recipe-container');
  const recipeGridView = new RecipeGridView(container, singleRecipe);
  recipeGridView.bindEvents();

  const recipeDetailView = new RecipeDetailView(singleRecipe);
  recipeDetailView.bindEvents();


  const selectElement = document.querySelector('.content-inner-diet');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  // 1. Loop through the category buttons (forEach)
  // 2. Add an event listener to each button
  // 3. Within the event listener, publish the type of diet selected as the payload
  // 4. Subscribe to this in the recipes model
  // 5. Within the subscribe, the model should find all the recipes of the selected diet
  // 6. Publish those recipes to the grid view
  // 7. Subscribed to by grid view
  // 8. Renders the recipes

  // Select:
  // 1. Listen for an on change in the select
  // FOllow steps 3 - 8 above!



});
