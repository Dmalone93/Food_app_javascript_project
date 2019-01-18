Rapid API Notes
  Need to ensure we limit the number of returns in all requests

Common URL
  https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes

GET (Index function)
  Search/GET/Get Random Recipes
    Returns one random recipes
    Will need to request data from Recipe Information when clicked
    Use for the home page; limit to 6
    https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=6


GET (Show function)
  Data/GET/Recipe Information
    Uses the id to search
    Returns various fields including recipe, ingredients, diet type etc.
    Use to render the recipe detail view
    https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479100/information
    https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/[recipe_id]/information


GET (Index function - by ingredients)
  Search/GET/Search Recipes by Ingredients
    Allows search by 3 comma separated ingredients
    Returns id, title, image
    https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar


GET (Index function - by criteria)
  Search/GET/Search Recipes
    Main search function
    Can we render both the cuisine and diet requirements from this??
    Needs a search parameter; can we hardcode this as ‘recipe’?
    Returns minimal details
    Will need to request data from Recipe Information when clicked
    Number - 6 (returns 6 results)
    https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=6&query=recipe
