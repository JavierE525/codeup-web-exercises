"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

let sayHello = function (name) {
    return ("Hello, " + name + "!");
}
console.log(sayHello("codeup"));
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// let helloMessage = sayHello("Javier");
// console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// let helloMessage = sayHello("Hyperion");
// console.log(helloMessage);
// console.log(myName);  // So far so good.

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

// console.log(random);


/**
 * TODO:
 * 1-- Create a function called 'isTwo' that takes a number as a parameter.
 * 2-- The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// if/else example
// if (condition) {
//     // code here gets executed if condition evaluates to true
// } else {
//     // code here gets executed if condition evaluates to false
//}
    cosnt isTwo = function (num) {
        if ()
            //code
        esle
    }
    console.log("The true or false answer is: " + num);
}





/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
let calculateTip = function (tipPercentace, totalBill) {
    return tipPercentace * totalBill;
}
calculateTip(calculateTip(0.20, 20));
calculateTip(calculateTip(0.25, 25.50));
calculateTip(calculateTip(0.20, 20));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let totalBill = prompt(prompt("What is your bill total?"));
let tipPercentace = parseFloat +prompt ("What percentage would you like to tip?")
// let totalBill = prompt(prompt("What is your bill total?"));
alert("Suggetsted Tip Ammount: $: + calculateTip(tipPercentage, ttotalBill));

 // * TODO:
 // * Create a function named `applyDiscount`. This function should accept a price
 // * (before a discount is applied), and a discount percentage (a number between 0
 // * and 1). It should return the result of applying the discount to the original
 // * price.
 // *
 // * Example:
 // var originalPrice = 100;
 // var dicountPercent = .2; // 20%
 // * > applyDiscount(originalPrice, dicountPercent) // 80
 // *
 // * > applyDiscount(45.99, 0.12) // 40.4712
 // */

const applyDiscount(originalPrice, dicountPercent)
{
    return originalPrice - originalPrice *dicountPercent;

}

