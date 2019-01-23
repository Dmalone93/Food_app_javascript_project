const RecipeDetailView = require('./views/recipe_detail_view.js');
const RecipeGridView = require('./views/recipe_grid_view.js');
const RecipeThumbnailView = require('./views/recipe_thumbnail_view.js');
const Recipes = require('./models/recipes.js');
const SelectView = require('./views/select_view.js');
const RecipeBookView = require('./views/recipe_book_view.js');


document.addEventListener('DOMContentLoaded', () => {
  ('Javascript Loaded');
  const header = document.querySelector('.searches');

  header.style.backgroundImage = "url('./images/wallpaper.jpg')"

  //header.style.backgroundImage = "url('./images/vegetables.jpg')"




  const url = 'http://localhost:3000/api/recipes';
  const recipeBookUrl = 'http://localhost:3000/api/recipeBook'
  const recipes = new Recipes(url, recipeBookUrl);
  recipes.getData();
  recipes.getBookData();
  recipes.bindEvents();
  recipes.createBook();




  const container = document.querySelector('#recipe-container');

  const recipeGridView = new RecipeGridView(container);
  recipeGridView.bindEvents();

  const singleRecipe = document.querySelector('div#recipe-container');
  
  
 
  
  
  const recipeDetailView = new RecipeDetailView(singleRecipe);
  recipeDetailView.bindEvents();


  const selectElement = document.querySelector('.content-inner-diet');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const recipeBookView = new RecipeBookView();

});
