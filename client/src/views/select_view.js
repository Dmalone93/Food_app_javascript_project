const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Recipes:all-data', (event) => {
    this.populate(event.detail);
  });
  this.element.addEventListener('change', (event) => {
    const selectedDiet = event.target.value;
    PubSub.publish('SelectView:diet-selected', selectedDiet);
  })
  'id#ing-search'.addEventListener('click', (event) => {
    const searchRecipe = event.target.value;
    PubSub.publish('SelectView:recipe-search', searchRecipe)
    console.log('hello', searchRecipe);
  })
}

SelectView.prototype.populate = function(recipes){

  const uniqueDiets = []
  recipes.forEach((recipe) => {
    if (!uniqueDiets.includes(recipe.diet)){
      uniqueDiets.push(recipe.diet)
    }
  })
  uniqueDiets.forEach((diet) => {
    const option = document.createElement('option')
    option.value = diet;
    option.textContent = diet;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
