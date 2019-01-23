const PubSub = require('../helpers/pub_sub.js');

const RecipeBookView = function (container) {
  this.container = container;
};

RecipeBookView.prototype.bindEvents = function(){
}

RecipeBookView.prototype.renderForm = function(recipe){

  const personalRecipe = document.createElement('form')


  // recipe_name:"1",
  const recipeName = document.createElement('input');
  recipeName.setAttribute('type', 'input');
  recipeName.textContent = recipe.recipe_name;
  personalRecipe.appendChild(recipeName);


  // ingredients:
  const ingrediantInput = document.createElement('input');
  ingredientInput.setAttribute('type', 'input');
  ingrediantInput.textContent = recipe.ingredients
  personalRecipe.appendChild(ingrediantInput);


  // prep_time: 1,
  const prepTime = document.createElement('input');
  prepTime.setAttribute('type', 'input');
  prepTime.textContent = recipe.prep_time;
  personalRecipe.appendChild(prepTime);


  // cook_time: 1,
  const cookTime = document.createElement('input');
  cookTime.setAttribute('type', 'input');
  cookTime.textContent = recipe.cook_time;
  personalRecipe.appendChild(cookTime);


  // servings: 1,
  const serving = document.createElement('input');
  serving.setAttribute('type', 'input');
  serving.textContent = recipe.servings;
  personalRecipe.appendChild(serving)


  // diet:[
  const diet = document.createElement('input');
  diet.setAttribute('type', 'input');
  diet.textContent = recipe.diet;
  personalRecipe.appendChild(diet);
  //   "1"
  // ],
  // cook_method: "1"
  const cookMethod = document.createElement('input');
  cookMethod.setAttribute('type', 'input');
  cookMethod.textContent = recipe.cook_method;
  personalRecipe.appendChild(cookMethod);
  //

  this.container.appendChild(personalRecipe);
}





module.exports = RecipeBookView;
