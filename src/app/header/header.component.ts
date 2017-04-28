
import { Component} from '@angular/core';
import {DataStorageService}  from '../shared/data-storage.service';
import {Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
  private authService:AuthService) { }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
      (response: Response) => {
        console.log(response);
      }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
}
