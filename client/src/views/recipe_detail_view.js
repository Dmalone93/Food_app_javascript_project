const PubSub = require('../helpers/pub_sub.js');

const RecipeDetailView = function (container) {
  this.container = container;
}


RecipeDetailView.prototype.createRecipe = function (recipe) {

  const recipeDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = recipe.recipe_name;
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

  // const diet  =
  //
  // const nutrition =

  return recipeDiv;
};

RecipeDetailView.prototype.recipeImage = function (recipe) {

  const imageDiv = document.createElement('div');

  const recipeImage = document.createElement('img')
  recipeImage.src = recipe.image;
  imageDiv.appendChild(recipeImage);

  return imageDiv;

};

RecipeDetailView.prototype.ingredients = function (recipe) {

  const ingredientsDiv = document.createElement('div');

  const ingHeader = document.createElement('h1');
  ingHeader.textContent = `Ingredients`;
  recipeDiv.appendChild(ingHeader);

  const ingredients = document.createElement('ul');
  ingredients.textContent = recipe.ingredients;
  ingredientsDiv.appendChild(ingredients);
  const list = new createList(recipe.ingredients);
  recipe.ingredients.forEach((ingredient) => {
    item = document.createElement('li')
    item.textContent = ingredient
    ingredients.appendChild(item);
  });

    return ingredientsDiv;
  };



//
//
// ingredients:
// [
//   "1 tbsp honey"
//
// ],
//
// prep_time: 20,
// cook_time: 60,
// servings: 12,
//
// nutritional_information:
// {
//   kcal: 112,
//   fat: "2g",
//   saturates: "1g",
//   carbs: "17g"
// },
//
// diet:[
//   "vegetarian"
// ],
//
// cook_method:

module.exports = RecipeDetailView;
