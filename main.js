/* Tomas Nilzén aq3870. */

"use strict";

/**
 * Uppgift 1
 * ======
 */
console.log(5 * 2 < 12);    // 10 < 12, which is true.
console.log(55 != 22);      // 55 is not equal to 22, which is true.
console.log(16 / 4 == 4);   // 4 is equal to 4, which is true.
console.log(8 + 2 < 128);   // 10 is less than 128, which is true.
console.log(32 * 8 > 255);  // 256 is greater than 255, which is true.

/**
 * Uppgift 2
 * ======
 */
// Save the strings as individual variables
let dag = "Tisdag";
let mat = "Hamburgare";
let filmcitat = "I'll be back";

// Use .substring() to print the desired parts

// Print "Tis" from "Tisdag"
let tis = dag.substring(0, 3);
console.log(tis);  // Output: "Tis"

// Print "burgare" from "Hamburgare"
let burgare = mat.substring(3);
console.log(burgare);  // Output: "burgare"

// Print "be back" from "I'll be back"
let beBack = filmcitat.substring(5, 12);
console.log(beBack);  // Output: "be back"

/**
 * Uppgift 3
 * ======
 */
// Save the strings as individual variables
let str1 = "It's Learning";
let str2 = "JavaScript: The Good Parts";

// Use string methods to print the desired parts

// Print "LEARNING" from "It's Learning"
let learning = str1.substring(5).toUpperCase();
console.log(learning);  // Output: "LEARNING"

// Print "good parts" from "JavaScript: The Good Parts"
let goodParts = str2.substring(16).toLowerCase();
console.log(goodParts);  // Output: "good parts"

/**
 * Uppgift 4
 * ======
 */
// Array with numbers
var numbers = [128, 256, 512, 1024, 2048];

// Step 1: Calculate the sum of all numbers
var sumOfNumbers = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0); // 0 is the initial value for acc (the accumulator)
console.log("Sum of numbers:", sumOfNumbers);  // Output: 3968

// Step 2: Calculate the average
var avgNumber = sumOfNumbers / numbers.length;
console.log("Average number:", avgNumber);  // Output: 793.6

// Step 3: Add the sum to the end of the array
numbers.push(sumOfNumbers);
console.log("New array:", numbers);  // Output: [128, 256, 512, 1024, 2048, 3968]

/**
 * Uppgift 5
 * ======
 */
// Array with countries
var countries = ["Sweden", "Denmark", "Finland", "Norway"];

// Print the first three letters of the second element
var secondCountry = countries[1];  // "Denmark"
console.log(secondCountry.substring(0, 3));  // Output: "Den"

// Calculate and print the average number of letters for all elements
var totalLetters = countries.reduce(function(acc, curr) {
    return acc + curr.length;
}, 0);  // Sum the length of all strings

var avgLetters = totalLetters / countries.length;
console.log("Average number of letters:", avgLetters);  // Output: 6.25

/**
 * Uppgift 6
 * ======
 */
// Array with different values
var values = [3, 5, "Jane", true, 144, false];

// Reverse the array
values.reverse();

// Print the reversed array to the console
console.log(values);  // Output: [false, 144, true, "Jane", 5, 3]

/**
 * Uppgift 7
 * ======
 */
// The three arrays
var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];

// Combine the arrays into a new array
var multipleArrays = names.concat(ages, hasPet);

// Print the new array to the console
console.log(multipleArrays);  // Output: ["Jane", "Joe", "Eliza", 21, 34, 22, true, false, true]

/**
 * Uppgift 8
 * ======
 */
// Array with names
var actors = ["Sherlock", "Watson", "Bo"];

// Combine all elements into a string with " - " as a separator
var actorsString = actors.join(" - ");

// Print the result to the console
console.log(actorsString);  // Output: "Sherlock - Watson - Bo"

/**
 * Uppgift 9
 * ======
 */
// Define the variable amount
var amount = 55;  // You can change this value to test different cases

// If-statement to check the value of amount
if (amount < 50) {
    console.log("Less than 50!");  // If amount is less than 50
} else if (amount >= 50 && amount < 65) {
    console.log("Optimal range for the amount!");  // If amount is between 50 and 64 (including 50)
} else {
    console.log("Too much!");  // All other cases (amount is 65 or more)
}

/**
 * Uppgift 10
 * ======
 */
// Print a triangle of # with 8 rows

for (var i = 1; i <= 8; i++) {
    console.log('#'.repeat(i));
}