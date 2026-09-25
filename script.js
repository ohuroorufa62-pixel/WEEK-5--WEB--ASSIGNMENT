// SpendWise JavaScript Foundation

// Application data stored in variables
let budget = 0;
let expenses = 0;
let balance = 0;

// Function to calculate the remaining balance
function calculateBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}

// Function to start the budget calculator
function startBudget() {

    // Collect budget information from the user
    budget = Number(prompt("Enter your total budget:"));

    // Collect expense information from the user
    expenses = Number(prompt("Enter your total expenses:"));

    // Calculate the remaining balance
    balance = calculateBalance(budget, expenses);

    // Display results in the browser console
    console.log("===== SpendWise Budget Summary =====");
    console.log("Total Budget: " + budget);
    console.log("Total Expenses: " + expenses);
    console.log("Remaining Balance: " + balance);

    // Check whether the user has money remaining
    if (balance > 0) {
        console.log("You still have money remaining.");
    } else if (balance === 0) {
        console.log("Your budget has been fully used.");
    } else {
        console.log("You have spent more than your budget.");
    }
}