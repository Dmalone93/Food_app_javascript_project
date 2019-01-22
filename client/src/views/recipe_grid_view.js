const PubSub = require('../helpers/pub_sub.js');
const RecipeThumbnailView = require('./recipe_thumbnail_view.js');
const RecipeDetailView = require('./recipe_detail_view.js')

const RecipeGridView = function (container, singleRecipe) {
  this.container = container;
  this.singleRecipe = singleRecipe;
};


RecipeGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {

    this.render(event.detail);
    // console.log(event.detail);
  });

  PubSub.subscribe('Recipes:recipe-by-diet', (event) => {
    console.log('hello', event.detail);
    this.render(event.detail);
  })

   recipe = this.renderRecipe(this.singleRecipe)
   console.log(event);
  PubSub.publish('RecipeGridView:recipe-selected', recipe);

  const allRecipes = this.render(event.detail);
  return allRecipes;
  });
  PubSub.subscribe('Recipes:all-book-data', (event) => {
  const allBookRecipes = this.render(event.detail);
  return allBookRecipes;
  });

};

//check if all diet types in the recipes in the render function are the same. Then you dont need to limit the recipes. If any of diet types are different from each other.
//Then you want to limit the recipes.
RecipeGridView.prototype.render = function (recipes) {
  const limitedRecipes = this.limitRecipes(recipes)
  console.log(limitedRecipes);
  const recipeThumbnailView = new RecipeThumbnailView(this.singleRecipe);
  limitedRecipes.forEach((recipe) => recipeThumbnailView.render(recipe));

};

RecipeGridView.prototype.limitRecipes = function(recipes){
  //set up empty array
    const randomNumbers = [];
    //increment the index number up to 6
    for(let i=0; i < 6; i++){
      //randomnumber = a random 6 numbers up to the length of the recipes array.
      const randomNumber = Math.floor(Math.random() * recipes.length -1) + 1
      //push those 6 index numbers into array
      randomNumbers.push(randomNumber);
    };
    //set new arary for 6 recipes
    const limitedRecipes = [];
    //for each of the randomNumbers with there index
    randomNumbers.forEach((randomNumber) => {
      //the recipe index number is the same number as the random one
      const recipe = recipes[randomNumber];//[1,14,12,21,8]
      //push those recipes indexes into the new array
      limitedRecipes.push(recipe);
    });
    //pash the limitRecipes into render function
    return limitedRecipes;
}
RecipeGridView.prototype.renderRecipe = function(recipe){
const recipeDetail = new RecipeDetailView()
const recipeDiv = recipeDetail.createRecipe(recipe);
this.container.appendChild(recipeDiv)
};


module.exports = RecipeGridView;
