import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], caloriesRange: string) {
    var output: Meal[] = [];
    if (caloriesRange !== "Show All") {
      input.forEach(function(meal) {
        if (caloriesRange === "more" && meal.calories >= 500 ) {
          output.push(meal);
        } else if (caloriesRange === "less" && meal.calories <= 500 ) {
          output.push(meal);
        }
      })
      return output;
    } else {
      return input;
    }
  }
}
