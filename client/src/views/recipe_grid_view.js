const PubSub = require('../helpers/pub_sub.js');
const RecipeThumbnailView = require('./recipe_thumbnail_view.js');

const RecipeGridView = function (container, recipesContainer) {
  this.container = container;
  this.recipesContainer = recipesContainer;
};

RecipeGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {
    this.render(event.detail);
    // console.log(event.detail);
  });
  this.container.addEventListener('click', (event) => {
    const selectedDiet = event.detail
    console.log(event.detail);
    PubSub.publish('Recipe:diet-selected', selectedDiet);
    console.log(selectedDiet);
  })
};

RecipeGridView.prototype.render = function (recipes) {
  // console.log(recipes);
  this.container.innerHTML = '';
  const recipeThumbnailView = new RecipeThumbnailView(this.container);
  recipes.forEach((recipe) => recipeThumbnailView.render(recipe));
};


module.exports = RecipeGridView;
