import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()

export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe',
  //     'This is simply a test',
  //     'https://c.pxhere.com/photos/b9/d3/cookbook_recipes_food_cook_book_paper_hand_culinary-881861.jpg!d',
  //     [
  //       new Ingredient('something', 2),
  //       new Ingredient('something else', 1)
  //     ]),
  //   new Recipe(
  //     'A Test Recipeee2',
  //     'This is simply a testttt2',
  //     'https://c.pxhere.com/photos/b9/d3/cookbook_recipes_food_cook_book_paper_hand_culinary-881861.jpg!d',
  //     [
  //       new Ingredient('a thing', 1),
  //       new Ingredient('something else', 3),
  //       new Ingredient('potatoes', 5),
  //     ]),
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
