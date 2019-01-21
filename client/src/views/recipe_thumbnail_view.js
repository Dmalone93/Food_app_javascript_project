const PubSub = require('../helpers/pub_sub.js');

const RecipeThumbnailView = function (container) {
  this.container = container;
}

RecipeThumbnailView.prototype.render = function (recipe) {
   const recipesContainer = document.createElement('div');
   recipesContainer.id = 'recipe';

   const name = this.createHeading(recipe.recipe_name);
   recipesContainer.appendChild(name);

   const recipeImage = this.createImage('img');
   recipeImage.src = recipe.image;
   recipesContainer.appendChild(recipeImage);
   console.log(recipeImage);

   this.container.appendChild(recipesContainer);

};

RecipeThumbnailView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

RecipeThumbnailView.prototype.createImage = function (url) {
  const recipeImage = document.createElement('img');
  recipeImage.src = url;
  recipeImage.id = 'recipeImage'
  return recipeImage;
};

RecipeThumbnailView.prototype.addRecipeToBook = function (recipeId) {
    const button = document.createElement('button');
    button.classList.add('add-button');
    button.value = recipeId;

    button.addEventListener('click', (event) => {
      PubSub.publish('Thumbnail:add-to-book', event.target.value);
    });
    return button;
};

module.exports = RecipeThumbnailView;
