import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <form>
      <div class="meals well text-center">
        <div class="row">
          <div class="col-sm-2">
            <h3>Meal</h3>
          </div>
          <div class="col-sm-2">
            <h3>Calories</h3>
          </div>
          <div class="col-sm-4">
            <h3>Notes</h3>
          </div>
          <div class="col-sm-1">
            <h3>Date</h3>
          </div>
          <div class="col-sm-2">
            <h3>Meal Time</h3>
          </div>
        </div>
        <div *ngFor="let currentMeal of childMealList">
          <div class="row">
            <div class="col-sm-2">
              <h4>{{ currentMeal.mealType }}</h4>
            </div>
            <div class="col-sm-2">
              <h4>{{ currentMeal.calories }}</h4>
            </div>
            <div class="col-sm-4">
              <h4>{{ currentMeal.notes }}</h4>
            </div>
            <div class="col-sm-1">
              <h4>{{ currentMeal.date }}</h4>
            </div>
            <div class="col-sm-2">
              <h4>{{ currentMeal.mealTime }}</h4>
            </div>
            <div class="col-sm-1">
              <button (click)="editMeal(currentMeal)">Edit Meal</button>
            </div>
          </div>
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
