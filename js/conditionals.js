"use strict";

/* ########################################################################## */

/**
 * TODO:
 * 1-- Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if(color === "blue");{
        console.log("blue is the color of the sky");
    } else if(color === "red:) {
        console.log("I don't know anything about cyan");
    } else if(color === "cyan") {
      console.log("I don't know anything about cyan");
    } else {
        console.log("you chose" + color + ", please choose: blue, red, or cyan as a clor");
}
console.log(analyzeColor("blue")); //blue is the color


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
    console.log(analyzeColor(randomColor)); // use this to check if it is working properly

    let color = randomColor;
    switch(color) {
    case "red":
         console.log("Srawberries are red");
         breaak;
    case "orange":
        console.log("Srawberries are orange");
        breaak;
    case "yellow":
        console.log("Srawberries are yellow");
        breaak;
    case "green":
        console.log("Srawberries are green");
        breaak;
    default:
        console.log("Srawberries are red" + color);
    }


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var color = (randomColor(color));
    switch (num) {
        case blue:
            console.log("You turned on the lights")
            break;
        case red:
            console.log("You turned off the lights")
            break;
        case cyan:
            console.log("Someone else turned on the lights")
            break;
        default:
            console.log("You chose " + color + ", please choose: blue, red, or cyan.");

            /**
             * TODO:
             * Prompt the user for a color when the page loads, and pass the input from the
             * user to your `analyzeColor` function. Alert the return value from your
             * function to show it to the user.
             */

            /* ########################################################################## */
            let color = prompt("color please: ")
            alert(analyzeColor(color));
            /**
             * TODO:
             * Suppose there's a promotion in Walmart, each customer is given a randomly
             * generated "lucky number" between 0 and 5.
             * 1-- If your lucky number is 0 you have no discount,
             * 2-- if your lucky number is 1 you'll get a 10% discount,
             * 3-- if it's 2, the discount is 25%,
             * 4-- if it's 3, 35%,
             * 5-- if it's 4, 50%,
             * 6-- and if it's 5 you'll get all for free!.
             *
             * Write a function named `calculateTotal` that accepts a lucky number and total
             * amount, and returns the discounted price.
             *
             * Example:
             * calculateTotal(0, 100) // returns 100
             * calculateTotal(4, 100) // returns 50
             * calculateTotal(5, 100) // returns
             *
             * Test your function by passing it various values and checking for the expected
             * return value.
             */
            var luckyNumber = prompt("What is your lucky number?");
            var totalAmount = prompt("What is the total ammount?");
            const calculaterTotal = function ((l)
        )
        {

        }
        //     const calculateTotal = function (luckyNumber, totalAmount) {
        //
        //     case
        //         1
        //     :
        //         return (totalAmount - totalAmount * .1).toFixed(2);
        //     }
        // case 2:
        //     return (totalAmount - totalAmount * .1).toFixed(2);
        // default:
        //     return (totalAmount.toFixed(2));

            if (luckyNumber === 0) {
                calculateTotal = (totalAmount * 0.0);
                console.log("You have a discount of " + calculateTotal);
            } else if (luckyNumber === 1) {
                calculateTotal = (totalAmount * 0.25)
                console.log("You are getting a discount of 25%");
            } else if (luckyNumber === 2) {
                calculateTotal = (totalAmount * 0.10)
                console.log("You are getting a discount of 10%");
            } else if (luckyNumber === 3) {
                calculateTotal = (totalAmount * 0.25)
                console.log("You are getting a discount of 25%");
            } else if (luckyNumber === 4) {
                calculateTotal = (totalAmount * 0.35)
                console.log("You are getting a discount of 35%");
            } else if (luckyNumber === 5) {
                calculateTotal = (totalAmount * 0.50);
                console.log("You are getting a discount of 50%");
            } else if (luckyNumber === 6) {
                // calculateTotal = (totalAmount * 0.0)
                console.log("You get everything for FREE!!!");
            } else {
                console.log("You get everything for FREE!!!");
            }

            // console.log(parseInt(calculateTotal(0, 100));
            // console.log(parseFloat(calculateTotal(0, 100));
            console.log("calculateTotal(0, 100");
            console.log("calculateTotal(1, 100");
            console.log("calculateTotal(2, 100");
            console.log("calculateTotal(2, 100");

/**
 * TODO:
 * 1-- Uncomment the line below to generate a random number between 0 and 6.
 * 2-- Prompt the user for their total bill,
 * 3-- then use your `calculateTotal` function
 * 4-- and alerts to display to the user what their lucky number was,
 * 5-- what their price before the discount was,
 * 6-- and what their price after the discount is.
 */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    let var totalBill = prompt("What is your total bill?");

    alert totalBill = parseFloat(prompt("Please ener your total"));
    alert("your lucky nuber is " = luckyNumber);
    alert("your lucky nuber is " = totalBill);




    // var num = 1;
    // switch (num) {
    //     case 0:
    //         console.log("Your lucky number was")
    //         break;
    //     case 1:
    //         console.log("You turned off the lights")
    //         break;
    //     case 2:
    //         console.log("Someone else turned on the lights")
    //         break;
    //     case 3:
    //         console.log("Someonething")
    //         break;
    //     default:
    //         console.log("default case")
    // }


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

    let confirmNumberInput = confirm("Would you like to enter a number: ");
    console.log(typeof confirmNumberInput);
    console.log(typeof confirmNumberInput);

    if(confirmNumberInput) {
        let confirmNumberInput = +prompt("Enter a number: "); //the puss sing convert it to a number
            if(isNaN(confirmNumberInput)) {
            alert("You did not enter a nubmer");

        // if they did not enter a number,
        } else {
            (confirmNuamberInput) % 2 === 0 ? alert("even") : alert("odd");
            (confirmNuamberInput >= 0) ? alert("positive") : alert("odd");
            alert("The number entered pluss 100 is equal to : " + (confirmNumberInput + 100));
        } else {
        alert("Thank you for playing!");
        }

    /////////////////////////////////////////////////////
    // you can use .replace funciton to find and replace whatever you want.
    // You will need to use two parameters for this!
    //