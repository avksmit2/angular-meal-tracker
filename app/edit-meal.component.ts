import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
    <h1>Edit Meal</h1>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <label>Meal Type:</label>
            <input [(ngModel)]="childSelectedMeal.mealType" class="form-control">
          </div>
        </div>
        <div class="col-sm-1">
          <div class="form-group">
            <label>Calories:</label>
            <input [(ngModel)]="childSelectedMeal.calories" class="form-control">
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label>Notes:</label>
            <input [(ngModel)]="childSelectedMeal.notes" class="form-control">
          </div>
        </div>
        <div class="col-sm-1">
          <div class="form-group">
            <label>Day:</label>
            <input [(ngModel)]="childSelectedMeal.date" class="form-control">
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <label>Meal Time:</label>
            <select [(ngModel)]="childSelectedMeal.mealTime" class="form-control">
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
          </div>
        </div>
        <div class="col-sm-1">
          <button class="btn btn-success"(click)="doneEditingClicked()">Done Editing</button>
        </div>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneEditingClicked() {
    this.doneClickedSender.emit();
  }
}
