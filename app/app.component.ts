import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <h1 class="text-center">My Meals</h1>

    </div>
    `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Pizza", 923, "3 slices", "Monday", "Dinner", 0),
    new Meal("Oatmeal", 115, "1 package brown sugar and cinnamon", "Monday", "Breakfast",1),
    new Meal("Salad", 376, "1 package sunflower crunch", "Monday", "Lunch",2)
  ];

}
