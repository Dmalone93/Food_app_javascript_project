const PubSub = require('../helpers/pub_sub.js');

const RecipeBookView = function (container) {
  this.container = container;
};

RecipeBookView.prototype.bindEvents = function(){
  PubSub.subscribe('Recipe:all-data', (event) => {
    this.container.renderForm(event.detail)
  });
};

RecipeBookView.prototype.renderForm = function(recipe){

  this.container.innerHTML = ''

  const personalRecipe = document.createElement('form')
  personalRecipe.setAttribute('id', 'recipe-form')


  // recipe_name:"1",
  const recipeName = document.createElement('input');
  recipeName.setAttribute('value', 'recipe-name');
  recipeName.setAttribute('id', 'item');
  personalRecipe.appendChild(recipeName);


  // ingredients:
  const ingrediantInput = document.createElement('input');
  ingrediantInput.setAttribute('value', 'ingredients');
  ingrediantInput.setAttribute('id', 'item');
  personalRecipe.appendChild(ingrediantInput);


  // prep_time: 1,
  const prepTime = document.createElement('input');
  prepTime.setAttribute('value', 'prep-time');
  prepTime.setAttribute('id', 'item');
  personalRecipe.appendChild(prepTime);


  // cook_time: 1,
  const cookTime = document.createElement('input');
  cookTime.setAttribute('value', 'cook-time');
  cookTime.setAttribute('id', 'item');
  personalRecipe.appendChild(cookTime);


  // servings: 1,
  const serving = document.createElement('input');
  serving.setAttribute('value', 'serving');
  serving.setAttribute('id', 'item');
  personalRecipe.appendChild(serving)


  // diet:[
  const diet = document.createElement('input');
  diet.setAttribute('value', 'diet');
  diet.setAttribute('id', 'item');
  personalRecipe.appendChild(diet);


  // cook_method: "1"
  const cookMethod = document.createElement('input');
  cookMethod.setAttribute('value', 'cook-method');
  cookMethod.setAttribute('id', 'item');
  personalRecipe.appendChild(cookMethod);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'new-recipe-btn');
  submitButton.textContent = 'Add in Recipe'
  personalRecipe.appendChild(submitButton)
  //

  personalRecipe.setAttribute('id', 'new-recipe-form')
  this.container.appendChild(personalRecipe);
}





module.exports = RecipeBookView;
