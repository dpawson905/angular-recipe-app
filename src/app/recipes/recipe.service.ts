import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tacos', 
      'Mouth Watering Family Recipe', 
      'https://www.deltaco.com/files/menu/item/flatbreadtaco.png',
      [
        new Ingredient("Minced Meat", "1 lb"),
        new Ingredient("Tomatoes", "3")
      ]),
    new Recipe(
      'Chicken N Dumplings', 
      'Mamas Recipe', 
      'https://www.spendwithpennies.com/wp-content/uploads/2016/10/CrockPot-Chicken-and-Dumplings-25.jpg',
      [
        new Ingredient('Bone-in Chicken Breasts', '2 lbs'),
        new Ingredient('Dumplings', '1 can of biscuits')
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}