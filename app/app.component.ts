import { Component } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Meal } from './meal.model';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <h1 class="text-center" id="header">My Meals</h1>
      <meal-list [childMealList] = "masterMealList"
                  (clickEditSender) = "editMeal($event)"
      ></meal-list>
      <new-meal [childMealList] = "masterMealList"
                (newMealSender) = "addMeal($event)"
      ></new-meal>
      <edit-meal [childSelectedMeal] = "selectedMeal"
                  (doneClickedSender) = "doneEditing()"
      ></edit-meal>
    </div>
    `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Pizza", 923, "3 slices", "Dinner", 0),
    new Meal("Oatmeal", 115, "1 package brown sugar and cinnamon", "Breakfast",1),
    new Meal("Salad", 376, "1 package sunflower crunch", "Lunch",2)
  ];
  public selectedMeal: Meal = null;

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  editMeal(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  doneEditing() {
    this.selectedMeal = null;
  }
}
