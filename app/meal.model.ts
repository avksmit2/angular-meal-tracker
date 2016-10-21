import * as moment from 'moment/moment';

export class Meal {
  public date: string = moment().format("MM/DD/YYYY");

  constructor(public mealType: string, public calories: number, public notes: string,  public mealTime: string, public id: number) {  }
}
