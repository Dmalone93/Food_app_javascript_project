const PubSub = require('../helpers/pub_sub.js');

const RecipeDetailView = function (container) {
  this.container = container;
}

RecipeDetailView.prototype.bindEvents = function(){

  PubSub.subscribe('RecipeThumbnailView:recipe-selected', (event) => {
    this.createRecipe(event.detail)
  });
  PubSub.subscribe('RecipeGridView: new-personal-recipe', (event) => {
    this.createRecipe(event.detail);
  })

};


RecipeDetailView.prototype.createRecipe = function (recipe) {
  this.container.innerHTML = ''


  const containerDiv = document.createElement('div')
  containerDiv.setAttribute('id', 'recipe-text')

  const recipeDiv = document.createElement('div');

  const img = document.createElement('img');
  img.src = recipe.image;
  containerDiv.appendChild(img);


  const header = document.createElement('h1');
  header.textContent = recipe.recipe_name;
  containerDiv.appendChild(header);


  const prepTime = document.createElement('li');
  prepTime.textContent = `Preperation Time: ${recipe.prep_time}`;
  containerDiv.appendChild(prepTime);



  const cookTime = document.createElement('li');
  cookTime.textContent = `Cook Time: ${recipe.cook_time}`;
  containerDiv.appendChild(cookTime);



  const servings = document.createElement('li');
  servings.textContent = `Servings: ${recipe.servings}`;
  containerDiv.appendChild(servings);



  const cookMethod = document.createElement('p');
  cookMethod.textContent = `Method: ${recipe.cook_method}`;
  containerDiv.appendChild(cookMethod);

  const ingredientList = document.createElement('ul');
  for (let i = 0; i < recipe.ingredients.length; i++){
    const ingredientItem = document.createElement('li')
    ingredientItem.textContent = `${recipe.ingredients[i]}`
    ingredientList.appendChild(ingredientItem)
  };
  containerDiv.appendChild(ingredientList)


  const diet  = document.createElement('p');
  diet.textContent = `Diet type: ${recipe.diet}`
  containerDiv.appendChild(diet);


  const button = document.createElement('button');
  button.classList.add('add-recipe');
  button.value = recipe.id;

  button.addEventListener('click', (event) => {
    PubSub.publish('RecipeDetailView:recipe-submitted', event.target.value)
    containerDiv.appendChild(button);
  });



  ('container', this.container);
  containerDiv.appendChild(recipeDiv)
  this.container.appendChild(containerDiv)
};

module.exports = RecipeDetailView;
