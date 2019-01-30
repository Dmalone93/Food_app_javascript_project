const PubSub = require('../helpers/pub_sub.js');

const SearchView = function(form){
  this.form = form;
}

SearchView.prototype.bindEvents = function(){

    this.form.addEventListener('submit', (event) => {
      this.handleSearch(event)
    // const searchRecipe = event.target.value;
  });
};

SearchView.prototype.handleSearch = function(event){
  event.preventDefault();
  const ingSearched = {
    ingSearch: event.target['ing-search'].value
  }
  PubSub.publish('SearchView:recipe-search', ingSearched)
  event.target.reset();
}


module.exports = SearchView;
