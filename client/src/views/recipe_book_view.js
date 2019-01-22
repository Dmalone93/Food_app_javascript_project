const PubSub = require('../helpers/pub_sub.js');

const RecipeBookView = function (container) {
  this.container = container;
};

RecipeBookView.prototype.bindEvents = function(){
  PubSub.subscribe('Recipe:all-data', (event) => {
    this.container.renderForm(event.detail)
    console.log(event.detail);
  });
};

RecipeBookView.prototype.renderForm = function(recipe){

  this.container.innerHTML = ''

  const personalRecipe = document.createElement('form')
  personalRecipe.setAttribute('id', 'recipe-form')


  // recipe_name:"1",
  const recipeName = document.createElement('input');
  recipeName.setAttribute('class', 'recipe-name');
  personalRecipe.appendChild(recipeName);


  // ingredients:
  const ingrediantInput = document.createElement('input');
  ingrediantInput.setAttribute('class', 'ingredients');
  personalRecipe.appendChild(ingrediantInput);


  // prep_time: 1,
  const prepTime = document.createElement('input');
  prepTime.setAttribute('class', 'prep-time');
  personalRecipe.appendChild(prepTime);


  // cook_time: 1,
  const cookTime = document.createElement('input');
  cookTime.setAttribute('class', 'cook-time');
  personalRecipe.appendChild(cookTime);


  // servings: 1,
  const serving = document.createElement('input');
  serving.setAttribute('class', 'serving');
  personalRecipe.appendChild(serving)


  // diet:[
  const diet = document.createElement('input');
  diet.setAttribute('class', 'diet');
  personalRecipe.appendChild(diet);
  //   "1"
  // ],
  // cook_method: "1"
  const cookMethod = document.createElement('input');
  cookMethod.setAttribute('class', 'cook-method');
  personalRecipe.appendChild(cookMethod);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'new-recipe-btn');
  submitButton.textContent = 'Add in Recipe'
  personalRecipe.appendChild(submitButton)
  //

  this.container.appendChild(personalRecipe);
}





module.exports = RecipeBookView;
