import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from "../recipe";
import { ShoppingListService } from "../../shopping-list";
import { Subscription } from "rxjs/Rx";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  @Input() selectedRecipe: Recipe;
  private recipeIndex: number;

  constructor(private sls: ShoppingListService, private activatedRoute: ActivatedRoute, 
  private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    )
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

}
