import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h2>Add New Meal</h2>
    <form>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <label>Meal Type:</label>
            <input #newMealType class="form-control">
          </div>
        </div>
        <div class="col-sm-1">
          <div class="form-group">
            <label>Calories:</label>
            <input #newCalories class="form-control">
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label>Notes:</label>
            <input #newNotes class="form-control">
          </div>
        </div>
        <div class="col-sm-1">
          <div class="form-group">
            <label>Day:</label>
            <input #newDate class="form-control">
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <label>Meal Time:</label>
            <select #newMealTime>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
          </div>
        </div>
        <div class="col-sm-1">
          <button (click)="addClicked(newMealType.value, newCalories.value, newNotes.value, newDate.value, newMealTime.value);
            newMealType.value = '';
            newCalories.value = '';
            newNotes.value = '';
            newDate.value = '';
            ">Add</button>
        </div>
      </div>
    </form>
  `
})

export class NewMealComponent {
  @Input() childMealList: Meal[];
  @Output() newMealSender = new EventEmitter();
  public mealId: number = 0;
  public mealList: Meal[] = [];
  getId() {
    this.mealList = this.childMealList.sort(function(a: Meal, b: Meal) {
      return (b.id)-(a.id);
    });
    this.mealId = this.mealList[0].id + 1;
  }
  addClicked(mealType: string, calories: number, notes: string, date: string, mealTime: string) {
    var newMeal: Meal = new Meal(mealType, calories, notes, date, mealTime, 4);
    this.newMealSender.emit(newMeal);
  }
}
