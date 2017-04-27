
import {Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService{
  //recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
  private recipes:Recipe[] = [
    new Recipe('A Test Recipe1',
    'This is a test description1',
    'http://www.cakesouth.com/wp-content/uploads/2015/12/Recipe_logo.jpeg',
    [new Ingredient('Meat',1),
     new Ingredient('Apples',6)] ),
    new Recipe('A Test Recipe2',
    'This is a test description2',
    'http://img.taste.com.au/cQSEA7BY/w720-h480-cfill-q80/taste/2016/11/curried-sausages-72753-1.jpeg',
    [new Ingredient('chicken',1),
     new Ingredient('french fries',6)] )
  ];

  constructor(private slService:ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();//Returns copy of the recipe array
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
   this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number,recipe:Recipe){
  this.recipes[index]=recipe;
  this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
  }
}
