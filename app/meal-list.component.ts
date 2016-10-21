import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h1 class="text-center">List of Meals</h1>
    <form>
      <div class="row">
        <div class="col-sm-3">
          <h3>Meal</h3>
        </div>
        <div class="col-sm-3">
          <h3>Calories</h3>
        </div>
        <div class="col-sm-3">
          <h3>Notes</h3>
        </div>
        <div class="col-sm-3">
          <h3>Date</h3>
        </div>
        <div class="col-sm-3">
          <h3>Meal Time</h3>
        </div>
      </div>
      <div class="row">
        <div #ngFor="let currentMeal of childMealList" class="col-sm-3">
          <h4>{{ currentMeal.mealType }}
        </div>
        <div class="col-sm-1">
          <h4>{{ currentMeal.calories }}
        </div>
        <div class="col-sm-4">
          <h4>{{ currentMeal.notes }}
        </div>
        <div class="col-sm-1">
          <h4>{{ currentMeal.date }}
        </div>
        <div class="col-sm-2">
          <h4>{{ currentMeal.mealTime }}
        </div>
        <div class="col-sm-1">
          <button (click)="editMeal(currentMeal)">Edit Meal</button>
        </div>
      </div>
    </form>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickEditSender = new EventEmitter();
  editMeal(mealToEdit: Meal) {
    this.clickEditSender.emit(mealToEdit);
  }
}
