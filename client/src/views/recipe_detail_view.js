// const PubSub = require('../helpers/pub_sub.js');
//
// const RecipeDetailView = function (container) {
//   this.container = container;
// }
//
//
// RecipeDetailView.prototype.createRecipe = function (recipe) {
//
//   const recipeDiv = document.createElement('div');
//
//   const header = document.createElement('h1');
//   header.textContent = recipe.recipe_name);
//   recipeDiv.appendChild(header);
//
//   const detailList = document.createElement('ul');
//
//   const prepTime = document.createElement('li');
//   prepTime.textContent = `Preperation Time: ${recipe.prep_time}`;
//   recipeDiv.appendChild(prepTime);
//
//   const cookTime = document.createElement('li');
//   cookTime.textContent = `Cook Time: ${recipe.cook_time}`;
//   recipeDiv.appendChild(cookTime);
//
//   const servings = document.createElement('li');
//   servings.textContent = `Servings: ${recipe.servings}`;
//   recipeDiv.appendChild(servings);
//
//   return recipeDiv;
// };
//
// RecipeDetailView.prototype.recipeImage = function (recipe) {
//
//   const imageDiv = document.createElement('div');
//
//   const recipeImage = document.createElement('img')
//   recipeImage.src = recipe.image;
//   imageDiv.appendChild(recipeImage);
//
// };
//
// module.exports = RecipeDetailView;
//
//
// //   const ingredients = this.createDetail(recipe.ingredients);
// //   singleContainer.appendChild(ingredients);
// //
// //
// //
// //
// // ingredients:
// // [
// //   "1 tbsp honey"
// //
// // ],
// //
// // prep_time: 20,
// // cook_time: 60,
// // servings: 12,
// //
// // nutritional_information:
// // {
// //   kcal: 112,
// //   fat: "2g",
// //   saturates: "1g",
// //   carbs: "17g"
// // },
// //
// // diet:[
// //   "vegetarian"
// // ],
// //
// // cook_method:
// //
// // image:
// //
// //
// //
// // module.exports = RecipeDetailView;
