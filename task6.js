
// 1. Student Attendance System

// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array

let presentStudents = ["Arulmani", "Vadhana", "Chandra"];
let absentStudents = ["Kabilan", "Siva", "Kamal"];

let allStudents = [...presentStudents, ...absentStudents];
allStudents.push("Anbumani");
console.log(allStudents);
    



// 2. E-Commerce Cart

// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object

let mobileDetails = {
    brand: "Apple",
    model: "iPhone 17 Pro",
    price: "$1099"
};
let chargerDetails = {
    chargerType: "USB-C",
    wattage: "40W",
    color: "White"
    
};
let cart = { ...mobileDetails, ...chargerDetails, deliveryDate: "20-05-2026" };

console.log(cart);




// 3. Food Delivery App

// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item

function orderFood(...items) {
    console.log(`Total items ordered: ${items.length}`);
    console.log(`First item: ${items[0]}`);
    console.log(`Last item: ${items[items   .length - 1]}`);
    console.log(`All items ordered: ${items.join(", ")}`);
}

orderFood("Biriyani","Fried Chicken", "Non-Veg Meal", "Milk Shake", "Goli-Soda");




// 4. Employee Salary Filter

// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees

let employees = [
    { name: "Arul", salary: 60000 },
    { name: "Vadhana", salary: 75000 }, 
    { name: "Chandra", salary: 55000 },
    { name: "Kabilan", salary: 40000 },
    { name: "Siva", salary: 30000 }
];
let highSalaryEmployees = employees.filter(employee => employee.salary > 50000);
console.log(highSalaryEmployees);




// 5. Online Game Score Board

// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total

let scores = [150, 200, 250, 300, 350];
let totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);
console.log(`Total score of all players: ${totalScore}`);
