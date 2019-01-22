const RequestHelper = require('../helpers/request_helpers.js');
const PubSub = require('../helpers/pub_sub.js')

const Recipes = function(url){
  this.recipes = [];
  this.url = url;
  this.request = new RequestHelper(this.url);
}

Recipes.prototype.bindEvents = function () {
  PubSub.subscribe('RecipeDetailView:recipe-submitted', (event) => {
    this.createBook(event.detail);
  })
};


Recipes.prototype.createBook = function (index) {


};
// find recipe from array, by index
// create request helper to post to db api/recipeBook
// use the request helper to post to recipeBook collection




Recipes.prototype.getData = function(){
this.request.get()
.then((recipes) => {
  this.recipes = recipes;
  PubSub.publish('Recipes:all-data', recipes)
})
.catch(console.error);
}

module.exports = Recipes;
