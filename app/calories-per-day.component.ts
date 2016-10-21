import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';
import * as moment from 'moment/moment';

@Component({
  selector: 'calories-per-day',
  inputs: ['caloriesPerDay'],
  template: `
    <h1>Calories Per Day</h1>
    <div>
      <h3>{{ caloriesPerDay }}.</h3>
    </div>
  `
})

export class CaloriesPerDayComponent {

}
