import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c.pxhere.com/photos/b9/d3/cookbook_recipes_food_cook_book_paper_hand_culinary-881861.jpg!d'),
    new Recipe('A Test Recipeee2', 'This is simply a testttt2', 'https://c.pxhere.com/photos/b9/d3/cookbook_recipes_food_cook_book_paper_hand_culinary-881861.jpg!d'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
