prompt("Please enter an odd number between 1 and 50");

//     Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
// a break if for   :
// a continue is for: jumps out of the iteration loop
// remember to use a persistant loop:

/// break and continue  ///////////////////////////////////////////////////////
let chooseOddNum = prompt("Please enter a number between 1 and 50: ");
chooseOddNum.parseInt()
for (var x = 1; x <= 50; x++) {
    if (x % 2 === 0) {
        continue;
    }
    if (x !== chooseOddNum) {
        console.log("Yikes! Skipping number: " + chooseOddNum)
        continue;
    }
    if ((x % 2) !== 0) {
        console.log("Here is an odd number: " + x)
    }
}
///////////////////////// while loop  ////////////////////////////

////////////////////////// END OF CODE! ///////////////////////////



