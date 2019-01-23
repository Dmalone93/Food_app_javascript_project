const PubSub = require('../helpers/pub_sub.js');

const RecipeDetailView = function (container) {
  this.container = container;
}

RecipeDetailView.prototype.bindEvents = function(){

  this.container.addEventListener('click', (event) => {
    (event.target.value);
  });


  PubSub.subscribe('RecipeThumbnailView:recipe-selected', (event) => {
    this.createRecipe(event.detail)
  });


};


RecipeDetailView.prototype.createRecipe = function (recipe) {
  this.container.innerHTML = ''

  const recipeDiv = document.createElement('div');

  const img = document.createElement('img');
  img.src = recipe.image;
  recipeDiv.appendChild(img);


  const header = document.createElement('h1');
  header.textContent = recipe.recipe_name;
  recipeDiv.appendChild(header);

  const button = document.createElement('button');
  button.classList.add('add-recipe');
  button.value = recipe.id;
  recipeDiv.appendChild(button);
  button.addEventListener('click', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('RecipeDetailView:recipe-added', selectedIndex);
  });


  const prepTime = document.createElement('li');
  prepTime.textContent = `Preperation Time: ${recipe.prep_time}`;
  recipeDiv.appendChild(prepTime);


  const cookTime = document.createElement('li');
  cookTime.textContent = `Cook Time: ${recipe.cook_time}`;
  recipeDiv.appendChild(cookTime);


  const servings = document.createElement('li');
  servings.textContent = `Servings: ${recipe.servings}`;
  recipeDiv.appendChild(servings);


  const cookMethod = document.createElement('p');
  cookMethod.textContent = `Method: ${recipe.cook_method}`;
  recipeDiv.appendChild(cookMethod);

  const ingredientList = document.createElement('ul');
  for (let i = 0; i < recipe.ingredients.length; i++){
    const ingredientItem = document.createElement('li')
    ingredientItem.textContent = `${recipe.ingredients[i]}`
    ingredientList.appendChild(ingredientItem)
  };
  recipeDiv.appendChild(ingredientList)


  const diet  = document.createElement('p');
  diet.textContent = `Diet type: ${recipe.diet}`
  recipeDiv.appendChild(diet);


  ('container', this.container);
  this.container.appendChild(recipeDiv)
};

module.exports = RecipeDetailView;
