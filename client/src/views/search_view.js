const PubSub = require('../helpers/pub_sub.js');

const SearchView = function(form){
  this.form = form;
}

SearchView.prototype.bindEvents = function(){

    this.form.addEventListener('submit', (event) => {
      this.handleSearch(event)
      console.log('hello', event);
    // const searchRecipe = event.target.value;
  });
};

SearchView.prototype.handleSearch = function(event){
  event.preventDefault();
  const ingSearched = this.createSearch(event.target);
  PubSub.publish('SearchView:recipe-search', ingSearched)
  event.target.reset();
}

SearchView.prototype.createSearch = function (form){
  const ingSearched = {
    ingSearch: form.ingSearch.value
  }
  return ingSearched
  console.log('hello', ingSearched);
}

module.exports = SearchView;
