const PubSub = require('../helpers/pub_sub.js');

const RecipeThumbnailView = function (container) {
  this.container = container;
}

RecipeThumbnailView.prototype.render = function (recipe) {

  const recipeWrapper = document.createElement('div');
  recipeWrapper.classList.add('recipe-container')
  recipeWrapper.addEventListener('click', (event) => {
    PubSub.publish('RecipeThumbnailView:recipe-selected', recipe)
    console.log('clicked', recipe);
  })


  const textWrapper = document.createElement('div');
  textWrapper.id = 'text'

  const name = this.createHeading(recipe.recipe_name);
  textWrapper.appendChild(name);

  const image = this.createImage(recipe.image);
  recipeWrapper.appendChild(image);
  recipeWrapper.appendChild(textWrapper);

  this.container.appendChild(recipeWrapper);
  console.log(recipeWrapper);

};

RecipeThumbnailView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};
RecipeThumbnailView.prototype.createImage = function (url) {
  const image = document.createElement('img');
  image.id = 'recipeImage';
  image.src = url;
  return image;
};




module.exports = RecipeThumbnailView;
