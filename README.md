# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a simple budget and expense tracking application. The project was initially created using HTML and CSS, and JavaScript has now been added to make the application interactive and able to process budgeting data.

The application allows users to enter their total budget and total expenses. JavaScript then calculates the remaining balance and displays the results clearly in the browser console.

## JavaScript Concepts Implemented

This project demonstrates several JavaScript concepts covered during Week 6:

* Variables
* Data types
* User input
* Number conversion
* Calculations
* Functions
* Conditional statements
* Console output

## How Variables Are Used

Variables are used to store important budgeting information.

For example:

```javascript
let budget = 0;
let expenses = 0;
let balance = 0;
```

The `budget` variable stores the user's total budget, while `expenses` stores the total amount spent. The `balance` variable stores the remaining amount after expenses are subtracted from the budget.

## How User Input Is Collected

The application uses the JavaScript `prompt()` function to collect information from the user.

```javascript
budget = Number(prompt("Enter your total budget:"));
expenses = Number(prompt("Enter your total expenses:"));
```

The `Number()` function converts the input from text into a number so that mathematical calculations can be performed.

## How Calculations Are Performed

SpendWise calculates the remaining balance by subtracting expenses from the budget.

```javascript
balance = calculateBalance(budget, expenses);
```

The calculation is performed by the `calculateBalance()` function:

```javascript
function calculateBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}
```

For example, if the budget is 50,000 and expenses are 15,000, the remaining balance is 35,000.

## How Functions Organize the Code

Functions help organize the JavaScript code into reusable sections.

The `calculateBalance()` function is responsible for calculating the remaining balance. It can be reused whenever the application needs to calculate a budget balance.

The `startBudget()` function collects the user's information, performs the calculation, and displays the results.

## Displaying Results

The calculated information is displayed in the browser console using `console.log()`.

The console displays:

* Total Budget
* Total Expenses
* Remaining Balance
* A message showing whether money remains, the budget has been fully used, or expenses are greater than the budget.

## Project Files

The project contains the following files:

* `index.html` - Contains the structure of the SpendWise webpage.
* `style.css` - Provides the styling and layout.
* `script.js` - Contains the JavaScript logic, calculations, functions, and user input.
* `README.md` - Explains the project and the JavaScript concepts used.

## How to Run the Project

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Click the **Start Budget Calculator** button.
5. Enter your budget and expenses when prompted.
6. Open the browser developer tools and select the **Console** tab to view the results.

## Conclusion

The Week 6 SpendWise project adds JavaScript functionality to the existing HTML and CSS project. It demonstrates how variables, user input, calculations, functions, and console output can be used to process budgeting information.
