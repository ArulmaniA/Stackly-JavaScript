// Task 1 — Student Registration Form

// Create a program using:
// prompt()
// variables (let, const)
// console.log()
// Requirements:
// Ask student name
// Ask department
// Ask age
// Print all details using template string
// Example Output:
// Welcome Naveen
// Department: CSE
// Age: 20

let studentName = prompt("Please enter your name:");
let department = prompt("Please enter your department:");
let age = prompt("Please enter your age:");

console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);




// Task 2 — ATM Withdrawal System

// Use:
// if else
// comparison operators
// logical operators
// Requirements:
// User balance = 10000
// Ask withdrawal amount
// If amount <= balance → "Transaction Successful"
// Else → "Insufficient Balance"
// Bonus:
// Minimum withdrawal = 100

let balance = 10000;
let withdrawalAmount = prompt("Please enter the amount you wish to withdraw:");  

if (withdrawalAmount >= 100) {
    if (withdrawalAmount <= balance) {
        console.log("Transaction Successful");
    }
    else {
        console.log("Insufficient Balance");
    }
}
else {
    console.log("Minimum withdrawal amount is 100");
}




// Task 3 — Swiggy Discount Checker

// Use:
// ternary operator
// Requirements:
// If order amount > 499
// Show:
// "Free Delivery Available"
// Else:
// "Delivery Charges Applied"


let orderAmount = prompt("Please enter your order amount:");


let message =
    orderAmount > 499
        ? "Free Delivery Available"
        : "Delivery Charges Applied";

console.log(message);




// Task 4 — Instagram Login System

// Use:
// nested if
// Requirements:
// Correct username = "admin"
// Correct password = "1234"
// Conditions:
// If username correct → ask password
// If password correct → Login Success
// Else → Wrong Password
// Else → Invalid Username

let username = prompt("Please enter your username:");

if (username === "admin") {
    let password = prompt("Please enter your password:");
    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid Username");
}




// Task 5 — Traffic Signal System

// Use:
// switch statement
// Requirements:
// Input:
// red / yellow / green
// Output:
// STOP
// READY
// GO

let signalColor = prompt("Please enter the traffic signal color (red/yellow/green):");
switch (signalColor) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Invalid traffic signal color");
}




// Task 6 — Employee Salary Calculator

// Use:
// function
// parameters
// return
// Requirements:
// Create function salaryCalculation
// Basic salary + bonus
// Return total salary
// Example:
// salaryCalculation(25000,5000)
// Output:
// 30000

function salaryCalculation(basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;
    return totalSalary;
}
console.log(salaryCalculation(25000,5000));





// Task 7 — E-Commerce Cart Total

// Use:
// Array
// for loop
// Requirements:
// Store product prices inside array:
// [100,200,300,400]
// Find:
// Total price
// Average price

let prices = [100, 200, 300, 400];
let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

let average = total / prices.length;

console.log("Total Price:", total);
console.log("Average Price:", average);




// Task 8 — WhatsApp Contact Book

// Use:
// Object
// for in loop
// Requirements:
// Store:
// name
// phone
// status
// Print all details dynamically.

let contact = {
    name: "Arulmani",
    phone: "9876543210",
    status: "Online"
};

for (let key in contact) {
    console.log(key + ": " + contact[key]);
}




// Task 9 — Movie Ticket Booking

// Use:
// function
// callback function
// Requirements:
// Create:
// bookTicket()
// payment()
// After booking complete,
// callback payment function automatically.

function payment() {
    console.log("Payment Successful");
}

function bookTicket(callback) {
    console.log("Ticket Booked Successfully");

    callback();
}

bookTicket(payment);
    



// Task 10 — Food Delivery Time Tracker
// Use:
// Generator Function
// Requirements:
// Show order stages one by one:
// Order Confirmed
// Preparing Food
// Out for Delivery
// Delivered

function* orderStages() {  
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

let stages = orderStages();

console.log(stages.next().value);
console.log(stages.next().value);
console.log(stages.next().value);
console.log(stages.next().value);

