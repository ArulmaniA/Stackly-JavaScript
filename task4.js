// Task 1 — Basic Function

// Create a function called welcomeUser.
// Requirements:
// Accept name
// Print:
// Welcome Naveen
// Example:
// welcomeUser("Naveen")

function welcomeUser(name) {
    console.log("Welcome " + name);
}
welcomeUser("Naveen");




// Task 2 — Parameter + Return

// Create a function squareNumber.
// Requirements:
// Accept one number
// Return square value
// Example:
// squareNumber(5)
// Output:
// 25

function squareNumber(num) {
    return num * num;
}
let result = squareNumber(5);
console.log(result);




// Task 3 — Object Function

// Create an object:
// {
//    name : "Rahul",
//    salary : 50000
// }
// Requirements:
// Create a function:
// employeeBonus(bonus)
// Output:
// Rahul
// 55000

let employee = {
    name: "Rahul",
    salary: 50000
};

function employeeBonus(bonus) {
    console.log(employee.name);
    console.log(employee.salary + bonus);
}
employeeBonus(5000);




// Task 4 — Scope Checking

// Inside a function:
// Create var
// Create let
// Create const
// Requirements:
// Try accessing them outside block
// Observe which works and which gives error

function scopeCheck() {
   if (true) {
       var a = "var10";
       let b = "let10";
       const c = "const10";

       console.log(a); // works
       console.log(b); // works
       console.log(c); // works
   }

    // console.log(a); // works  - var is function scoped
    // console.log(b); // error  - let is block scoped
    // console.log(c); // error  - const is block scoped  
}

scopeCheck();




// Task 5 — Arrow Function

// Convert this into arrow function:
// function add(a,b){
//    console.log(a+b);
// }

let add = (a, b) => {
    console.log(a + b);
}
add(5, 10);




// Task 6 — Callback Function

// Create:
// multiply
// calculator
// Requirements:
// calculator should accept:
// callback function
// two numbers
// Example:
// calculator(multiply,5,2)
// Output:
// 10

function multiply(x, y) {
    return x * y;
}

function calculator(callback, a, b) {
    console.log(callback(a, b));
}
calculator(multiply, 5, 2);




// Task 7 — Generator Function

// Create generator function offers.
// Requirements:
// Yield:
// "50% OFF"
// "Free Delivery"
// "Cashback"
// Use:
// next()
// to print values one by one.

function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let getoffers = offers();

console.log(getoffers.next().value);
console.log(getoffers.next().value);
console.log(getoffers.next().value);




// Task 8 — Default Parameter

// Create:
// student(name,course="JavaScript")
// Requirements:
// If course not passed,
// default should become "JavaScript".

function student(name, course = "JavaScript") {
    console.log("Name: " + name);
    console.log("Course: " + course);
}
student("Arulmani"); 
student("Kabilan", "Python"); 




// Task 9 — Currying

// Create currying function for multiplication.
// Example:
// multi(2)(3)(4)
// Output:
// 24

function multi(a) {
    return function(b) {
        return function(c) {
            console.log(a * b * c);
        }
    }   
}

multi(2)(3)(4);





// Task 10 — Spread Operator

// Merge these arrays:
// [1,2,3]
// [4,5,6]
// Final Output:
// [1,2,3,4,5,6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);




// Task 11 — Object Spread

// Merge two objects:
// {name:"Navi"}
// {role:"Developer"}
// Final Output:
// {
//   name:"Navi",
//   role:"Developer"
// }

let user = { name: "Navi" };
let job = { role: "Developer" };

let mergedObj = { ...user, ...job };
console.log(mergedObj);




// Task 12 — Rest Operator

// Create function:
// numbers(...num)
// Requirements:
// Print all numbers
// Print total sum
// Example:
// numbers(1,2,3,4)
// Output:
// [1,2,3,4]
// 10

function numbers(...num) {

    console.log(num);

    let sum = 0;

    for(let n of num) {
        sum += n;
    }
    console.log(sum);
    
}   
numbers(1, 2, 3, 4);




// Mini Challenge 🔥

// Create one small Student Management System using:
// function
// callback
// object
// array
// spread operator
// rest operator
// Features:
// Add student
// Print students
// Calculate marks
// Add bonus marks

let students = [];

function addStudent(name, course, ...marks) {
    let student = {
        name: name,
        course: course,
        marks: marks
    };

    students = [...students, student];
}

function calculateMarks(marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}

function addBonusMarks(student, bonus) {
    return {
        ...student,
        marks: student.marks.map(function(mark) {
            return mark + bonus;
        })
    };
}

function printStudents(callback) {
    for (let student of students) {
        callback(student);
    }
}

function showStudentDetails(student) {
    let total = calculateMarks(student.marks);

    console.log("Name: " + student.name);
    console.log("Course: " + student.course);
    console.log("Marks: " + student.marks);
    console.log("Total Marks: " + total);
    console.log("--------------------");
}

addStudent("Arulmani", "JavaScript", 89, 85, 97);
addStudent("Kabilan", "Python", 75, 88, 92);

console.log("Students List");
printStudents(showStudentDetails);

students[0] = addBonusMarks(students[0], 5);
students[1] = addBonusMarks(students[1], 5);

console.log("After Bonus Marks");
printStudents(showStudentDetails);





