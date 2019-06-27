import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c.pxhere.com/photos/b9/d3/cookbook_recipes_food_cook_book_paper_hand_culinary-881861.jpg!d',
      [
        new Ingredient('something', 2),
        new Ingredient('something else', 1)
      ]),
    new Recipe(
      'A Test Recipeee2',
      'This is simply a testttt2',
      'https://c.pxhere.com/photos/b9/d3/cookbook_recipes_food_cook_book_paper_hand_culinary-881861.jpg!d',
      [
        new Ingredient('a thing', 1),
        new Ingredient('something else', 3),
        new Ingredient('potatoes', 5),
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
