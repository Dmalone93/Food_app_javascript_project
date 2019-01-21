const RequestHelper = require('../helpers/request_helpers.js');
const PubSub = require('../helpers/pub_sub.js')

const Recipes = function(url){
  this.url = url
  this.request = new RequestHelper(this.url);
}

Recipes.prototype.getData = function(){
this.request.get().then((recipes) => {
  PubSub.publish('Recipes:all-data', recipes)
})
.catch(console.error)
}

Recipes.prototype.bindEvents = function () {
  PubSub.subscribe('Recipes:all-data', (event) => {
    const allData = event.detail;
  })
}

module.exports = Recipes;
