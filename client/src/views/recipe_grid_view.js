const PubSub = require('../helpers/pub_sub.js');
const RecipeThumbnailView = require('./recipe_thumbnail_view.js');

const RecipeGridView = function (container, recipesContainer) {
  this.container = container;
  this.recipesContainer = recipesContainer;
};

RecipeGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {
    this.render(event.detail);
  });
};

RecipeGridView.prototype.render = function (recipes) {
  // this.container.innerHTML = '';
  const recipeThumbnailView = new RecipeThumbnailView(this.container);
  recipes.forEach((recipe) => recipeThumbnailView.render(recipe));
};

module.exports = RecipeGridView;
