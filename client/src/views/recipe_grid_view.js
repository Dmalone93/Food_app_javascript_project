const PubSub = require('../helpers/pub_sub.js');
const RecipeThumbnailView = require('./recipe_thumbnail_view.js');

const RecipeGridView = function (container) {
  this.container = container;
};

RecipeGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {
    this.render(event.detail);
    console.log(event.detail);
  });
};

RecipeGridView.prototype.render = function (recipes) {
  console.log(recipes);
  // this.container.innerHTML = '';
  const recipeThumbnailView = new RecipeThumbnailView(this.container);
  recipes.forEach((recipe) => recipeThumbnailView.render(recipe));
};

module.exports = RecipeGridView
