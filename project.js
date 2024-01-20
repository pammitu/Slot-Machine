// 1. Deposit some money, we need to know how much money the user has to plat with
// 2. Determine the number of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play agin

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposite amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.")
    } else {
        return numberDepositAmount;
    }
    }
};

const depositAmount = deposit();
console.log(depositAmount);