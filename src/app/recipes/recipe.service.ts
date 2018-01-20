import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://static.pexels.com/photos/34950/pexels-photo.jpg'),
    new Recipe('A Test Recipe 123', 'This is a test', 'https://static.pexels.com/photos/34950/pexels-photo.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}