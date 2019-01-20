const PubSub = require('../helpers/pubsub.js');

const RecipeThumbnailView = function (container) {
  this.container = container;
}

RecipeThumbnailView.prototype.render = function (recipe) {
   const recipesContainer = document.createElement('div');
   recipesContainer.id = 'recipe';

   const name = this.createHeading(recipe.recipe_name);
   recipesContainer.appendChild(name);

   const image = this.createImage(image.image);
   recipesContainer.appendChild(image);

   this.container.appendChild(recipesContainer);

};

RecipeThumbnailView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

RecipeThumbnailView.prototype.createImage = function (url) {
  const image = document.createElement('img');
  image.src = recipe.image;
  image.id = 'recipeImage'
  return image;
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
