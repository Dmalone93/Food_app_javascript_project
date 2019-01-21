const RequestHelper = require('../helpers/request_helpers.js');
const PubSub = require('../helpers/pub_sub.js')

const Recipes = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
}

Recipes.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:diet-selected', (event) => {
    const allData = event.detail;
    const foundDiet = this.findByDiet(diet);
    PubSub.publish('Recipes:recipe-details', foundDiet)
  })
}

Recipes.prototype.getData = function(){
this.request.get()
.then((recipes) => {
  PubSub.publish('Recipes:all-data', recipes)
})
.catch(console.error);
}

Recipes.prototype.findByDiet = function(searchDiet){
  const foundDiet = this.recipes.filter((diet) => {
    return diet.diet === searchDiet;
  })
  return foundDiet
}



module.exports = Recipes;
