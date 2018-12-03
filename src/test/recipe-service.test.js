import {RecipeService} from './../services/recipe.service';

describe('recipe service', () => {
  it('get all recipes', () => {
    const recipeService=new RecipeService();
    const recipes=recipeService.getRecipes();
    expect(recipes.length).toEqual(4);
  });

  it('get a recipe', () => {
    const recipeService=new RecipeService();
    const recipe=recipeService.getRecipe('35171');
    expect(recipe.title).toEqual('Buffalo Chicken Grilled Cheese Sandwich');
  });
});
  