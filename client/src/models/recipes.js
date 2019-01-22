const RequestHelper = require('../helpers/request_helpers.js');
const PubSub = require('../helpers/pub_sub.js')

const Recipes = function(url, recipeBookUrl){
  this.url = url;
  this.recipeBookUrl = recipeBookUrl;
  this.request = new RequestHelper(this.url);
  this.bookRequest = new RequestHelper(this.recipeBookUrl);
}

Recipes.prototype.getBookData = function(){
this.bookRequest.get()
.then((bookRecipes) => {
  PubSub.publish('Recipes:all-book-data', bookRecipes)
})
.catch(console.error);
}


Recipes.prototype.getData = function(){
this.request.get()
.then((recipes) => {
  PubSub.publish('Recipes:all-data', recipes)
})
.catch(console.error);
}

module.exports = Recipes;
