import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import * as moment from 'moment/moment';


@Component({
  selector: 'new-meal',
  template: `
    <form id="addMeal">
      <h2>Add New Meal</h2>
      <div class="row details">
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
        <div class="col-sm-2">
          <div class="form-group">
            <label>Meal Time:</label>
            <select #newMealTime class="form-control">
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
          </div>
        </div>
      </div>
      <button class="btn btn-success"(click)="addClicked(newMealType.value, newCalories.value, newNotes.value, newMealTime.value);
        newMealType.value = '';
        newCalories.value = '';
        newNotes.value = '';
        newDate.value = '';
        ">Add</button>
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
  addClicked(mealType: string, calories: number, notes: string, mealTime: string) {
    var newMeal: Meal = new Meal(mealType, calories, notes, mealTime, this.mealId);
    this.newMealSender.emit(newMeal);
  }

}
