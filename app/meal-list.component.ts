import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { Overlay, overlayConfigFactory } from 'angular2-modal';

@Component({
  selector: 'meal-list',
  template: `
    <div class="filter">
      <h3>Filter</h3>
      <p>Show meals with
        <select (change)="filterCalories($event.target.value)">
          <option selected>more or less (all)</option>
          <option>more</option>
          <option>less</option>
        </select>
        than 500 calories.
      </p>
    </div>
    <form>
      <div class="meals well text-center">
        <div class="row listHeaderRow">
          <div class="col-sm-1">
            <h3>Meal</h3>
          </div>
          <div class="col-sm-2">
            <h3>Calories</h3>
          </div>
          <div class="col-sm-3">
            <h3>Notes</h3>
          </div>
          <div class="col-sm-2">
            <h3>Date</h3>
          </div>
          <div class="col-sm-2">
            <h3>Meal Time</h3>
          </div>
        </div>
        <div *ngFor="let currentMeal of childMealList | calories:selectedCaloriesRange">
          <div class="row">
            <div class="col-sm-1">
              <h4>{{ currentMeal.mealType }}</h4>
            </div>
            <div class="col-sm-2">
              <h4>{{ currentMeal.calories }}</h4>
            </div>
            <div class="col-sm-3">
              <h4>{{ currentMeal.notes }}</h4>
            </div>
            <div (click)="getTotalCalories(currentMeal.date)" class="col-sm-2" id="totCaloriesDate">
              <h4>{{ currentMeal.date }}</h4>
            </div>
            <div class="col-sm-2">
              <h4>{{ currentMeal.mealTime }}</h4>
            </div>
            <div class="col-sm-1">
              <button class="btn btn-info" (click)="editMeal(currentMeal)">Edit Meal</button>
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
  public selectedCaloriesRange: string = "more or less (all)";
  editMeal(mealToEdit: Meal) {
    this.clickEditSender.emit(mealToEdit);
  }
  filterCalories(caloriesRange: string) {
    this.selectedCaloriesRange = caloriesRange;
  }
  getTotalCalories(dateToEvaluate: string) {
    var output: Meal[] = [];
    var totalCalories: number = 0;
    var avgCalories: number = 0;
    output = this.childMealList.sort(function(a,b) {
      return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0);
    });
    output.forEach(function(meal) {
      if (meal.date === dateToEvaluate) {
        totalCalories += meal.calories;
      }
    })
    avgCalories = parseFloat((totalCalories / output.length).toFixed(2));
    alert("The total calories for " + dateToEvaluate + " are " + totalCalories + ". The average calories eaten for that day is: " + avgCalories + ".");
  }
}
