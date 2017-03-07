# _Angular Meal Tracker_

#### _A simple meal tracker._ {October 21, 2016}

#### By _**Angela Smith**_

## Description

_This website allows users to enter details about their meals, including the calories and when they ate. The users can edit what they've entered, add more entries and sort/filter the entries._

## Specifications

| Behavior                   | Input    |Output|
| -------------------------- |----------| -----|
| Return a meal entered | "Pizza, 537 calories" | "Pizza, 537 calories" |
| Save new entries from user | "Bean Burrito, 429 calories" | "Bean Burrito, 429 calories" |
| Allow user to edit meals | "Pizza, 537 calories", "276 calories" | "Pizza, 276 calories" |
| Allow user filter meals by calories | Calories, less than 500 calories | "Pizza, 276 calories" |
| Display the total number of calories eaten in a day | Monday | 1300 calories |
| Allow user to enter multiple meals for multiple days | Monday - pizza, 576 calories, cereal, 135 calories; Tuesday - burrito, 379 calories, coffee, 0 calories | Monday - pizza, 576 calories, cereal, 135 calories; Tuesday - burrito, 379 calories, coffee, 0 calories |
| Display the average calories per day | Monday - pizza, 576 calories, cereal, 135 calories; Tuesday - burrito, 379 calories, coffee, 0 calories | 257 calories |


## Setup/Installation Requirements

* Clone the directory "js-github-user" in a command line.
* Run "npm install" in the command line.
* Run "bower install" in the command line.
* Run "gulp serve" in the command line.
* Go to the webpage that opens. You can also open the index.html file in a web browser instead of using gulp serve.

## Known Bugs

_There are no known bugs_

## Support and contact details

If there are any issues, questions or ideas regarding this application, contact Angie Smith at avksmit2@gmail.com.

## Technologies Used

_CSS,
SASS,
Bootstrap,
Node.js,
gulp,
Bower,
TypeScript,
Angular 2_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2016 _**Angela Smith**_
