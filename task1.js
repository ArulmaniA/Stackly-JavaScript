// SECTION - 1 : VARIABLES(1-8)



// 1. What is the output?

//var a = 10;
//a = 15;   // var can be re-assigned and re-declared
//console.log(a); //15



// 2. What happens here?

// let b = 20;
// let b = 30; // let cannot be re-declared but it can be re-assigned



// 3. What is the output? 

//const c = 50;
//console.log(c); // 50



// 4. Identify error:

// const x = 10;
// x = 20;        // const cannot be re-assigned and re-declared



// 5. Output?

//var p = 5;
//var p = 10;
//console.log(p); // 10



// 6. Output?

//let q = 25;
//q = q + 10;
//console.log(q); // 35



// 7. Output?

//const r = 7;
//console.log(r + 3); // 10



// 8. Fill correct keyword:

// var a = 10;
// let a = 10;
// const a = 10;



//___________________________________________________________________________//


// SECTION - 2 : CONSOLE METHODS(9-12)



var name = "Arul";

// 9. Which method prints normal output?

 console.log(name); // Arul



// 10. Which method shows warning?

 console.warn(name); // Arul (with a warning sign in the console)



// 11. Which method shows error?

 console.error(name); // Arul (with an error sign in the console)



// 12. What does this do?
 console.clear() // Clears the console, removing all previous logs, warnings, and errors.



//___________________________________________________________________________//


// SECTION - 3 : DATA TYPES(13-18)



// 13. Output?

// let a = "hello";
// console.log(typeof a); // string



// 14. Output?

// let b = 100;
// console.log(typeof b); // number    



// 15. Output?

// let c = false;
// console.log(typeof c); // boolean



// 16. Output?

// let d;
// console.log(d); // undefined



// 17. What is type of null?

// let e = null;
// console.log(typeof e); // object (this is a known quirk in JavaScript)



// 18. Convert string to number:

// let f = "25";
// console.log(Number(f)); // 25   
 
 console.clear()



//___________________________________________________________________________//


// SECTION - 4 : ARRAYS(19-24)



// 19. Create array of 3 fruits.

let fruits = ["apple", "banana", "orange"];
console.log(fruits);



// 20. Output?

let arr1 = ["a","b","c"];
console.log(arr1[1]); // b (accessing the second element of the array using index 1)



// 21. Output?

let arr2 = ["x","y","z"];
console.log(arr2[arr2.length-1]); // z (accessing the last element of the array using length property)



// 22. How to get first element?

let arr3 = ["a","b","c"];
console.log(arr3[0]); // a (accessing the first element of the array using index 0)



// 23. Output?

let arr4 = ["apple","banana"];
console.log(arr4.length); // 2 (length property returns the number of elements in the array)



// 24. Add new element to array.

let arr5 = ["apple","banana"];
arr5.push("orange");
console.log(arr5); // ["apple","banana","orange"]

console.clear()



//___________________________________________________________________________//


// SECTION - 5 : OBJECTS(25-28)



// 25. Create object with name & age.

let person = {
    name: "Arul",
    age: 21
};
console.log(person);



// 26. Output?

let obj1 = {name:"Naveen"};
console.log(obj1.name); // Naveen



// 27. Output?

let obj2 = {fruits: ["apple","banana"]};
console.log(obj2.fruits[1]);  //banana



// 28. How to access last element inside object array?

let obj3 = {fruits: ["apple","banana","orange"]};
console.log(obj3.fruits[obj3.fruits.length - 1]); // orange 

console.clear()



//___________________________________________________________________________//


// SECTION - 6 : ARITHMETIC OPERATORS(29-32)



// 29. Output?

console.log(5 + 3); // 8



// 30. Output?

console.log(10 % 3); // 1



// 31. Output?

console.log(2 ** 3); // 8



// 32. Output?

console.log(10 / 2); // 5

console.clear()



//___________________________________________________________________________//


// SECTION - 7 : INCREMENT/DECREMENT(33-36)



// 33. Output?

let a = 5;
a++;
console.log(a); // 6 (_a=5 , a++ means a = a + 1, so a becomes 6)



// 34. Output?

let b = 5;
let c = b++;
console.log(b, c); // 6,5 (b++ is post-increment, so c gets the original value of b which is 5, and then b is incremented to 6)



// 35. Output?

let x = 5;
let y = ++x;
console.log(x, y); // 6,6 (x++ is pre-increment, so x is incremented first to 6, and then y gets the new value of x which is 6)



// 36. Output?

let m = 3;
let n = m--;
console.log(m, n); // 2,3 (m-- is post-decrement, so n gets the original value of m which is 3, and then m is decremented to 2)

console.clear()



//___________________________________________________________________________//


// SECTION - 8 : COMPARISON & LOGICAL(37-39)



// 37. Output?

console.log(5 == "5"); // true (loose equality, compares values only)



// 38. Output?

console.log(5 === "5"); // false (strict equality, compares both value and type)



// 39. Output?

console.log(true && false || true); // true

console.clear()



//___________________________________________________________________________//


// SECTION - 9 : TERNARY(40)

// 40. Output?
5 > 3 ? console.log("Yes") : console.log("No"); // Yes




