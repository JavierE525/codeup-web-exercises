///////////////////showMultiplicationTable #1////////////////////
// Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// let showMultiplicationTable = function(num) {
//  for (let i = 1; i <= 10; i++)
//      console.log(num + " x " + i + " = " + (i * num));
//
// }
// showMultiplicationTable(8);

/////////////////////////for Loop #2/////////////////////////////
// Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and output to the console
// whether each number is odd or even. For example:
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

// for (let i = 0; i < 10; i++) {
//
//     let random = Math.floor(Math.random() * 200) + 1;
//     if (random % 2 === 0) {
//           //testing if the number is even: (aNumber % 2 will give a result of 0)
//           // then the number is even:
//         console.log(random + " is even");
//     } else {
//         console.log(random + " is odd");
//          // everything that is not even will end up here, and we console log it.
//     }
// }

///////////////////////for Loop #3////////////////////////////////////
// Create a for loop that uses console.log to create the
// output shown below.

// for (let i = 1; i <= 9; i++) {
//     // we are only going to print out our answer (((9))) times.
//     let str = "";
//     // creating an empty string.
//     for (let j = 1; j <= i; j++) {
//         // looping as long as i is less than or equal to i.
//         str += i;
//         // str = str + 1.
//     }
//     console.log(str);
// }
///////////////////////for Loop #4////////////////////////////////////
// Create a for loop that uses console.log to create the
// output shown below.

// for (let i = 100; i > 0; i -=5) {
//     // starting at 100, we are decrementing by 5 each time the loop runs.
//     console.log(i);
// }

// converting from a string to an array //

// var namesString = "Joe,Bob,Sally";
// console.log(namesString);
// // Joe,Bob,Sally
// var namesArray = namesString.split(',');
// console.log(namesArray);
//
// // convering from an array to a string //
//
// var namesArray = ['Joe', 'Bob', 'Sally', 'Jim'];
// console.log(namesArray);
// // ['Joe', 'Bob', 'Sally']
//
// var namesString = namesArray.join(',');
//
// console.log(namesString);
// // Joe,Bob,Sally
// redirect browser to google.com

"use strict";
(function() {
    var btnToClick = document.getElementById('btnToClick');

    console.log(btnToClick); // prints <button id="btnToClick">Click Me</button>
})();