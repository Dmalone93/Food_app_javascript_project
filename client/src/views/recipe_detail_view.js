const PubSub = require('../helpers/pub_sub.js');

const RecipeDetailView = function (container) {
  this.container = container;
}


RecipeDetailView.prototype.createRecipe = function (recipe) {

  const recipeDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = recipe.recipe_name);
  recipeDiv.appendChild(header);

  const detailList = document.createElement('ul');

  const prepTime = document.createElement('li');
  prepTime.textContent = `Preperation Time: ${recipe.prep_time}`;
  recipeDiv.appendChild(prepTime);

  const cookTime = document.createElement('li');
  cookTime.textContent = `Cook Time: ${recipe.cook_time}`;
  recipeDiv.appendChild(cookTime);

  const servings = document.createElement('li');
  servings.textContent = `Servings: ${recipe.servings}`;
  recipeDiv.appendChild(servings);

  return recipeDiv;
};

RecipeDetailView.prototype.recipeImage = function (recipe) {

  const imageDiv = document.createElement('div');

  const recipeImage = document.createElement('img')
  recipeImage.src = recipe.image;
  imageDiv.appendChild(recipeImage);

};

module.exports = RecipeDetailView;
