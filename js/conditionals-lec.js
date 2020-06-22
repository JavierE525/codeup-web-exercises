"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over



// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = false;
if (isAdmin) {

}

//TODO Together: Send a 20% off coupon if its users birthday
var birthday = true;
    if(birthday) {

    }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRainy = true;
    if(isRainy){
        alert("Its raining");
    }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var itemCost = 300;
var currentBalance = 200;
if (itemCost > currentBalance) {
    alert("Item cost is greater than current valance, but the House")
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 10;

// if (numberOfLives === 0) {
//     alert("Sorry, game over");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var weather = "rainy"
if (weather === "snowing") {
    alert("Sorry, Its snowing");
}

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = 5;
if (numberInput  > 11) {
    alert("true");
}
// if ((numberInput  > 10) && (numberInput < 20)) {
//     alert("true);
// }

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
function isGameOver(numOfLives) {

}
if (numberOfLives === 0) {
    if (numberOfLives === 0) {
        alert("Sorry, game over")
    }
    isGameOver(0)
}

// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin = false;

if (isAdmin) {
    // show specific Navbar
} else {
    // do not show Navbar
}


//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
var isRainy = true;

if (isRainy) {
    alert("Its Raining Y'all")
} else  {
    alert("Have a nice day!")
}


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Sorry, game over"
var numberOfLives = 5;
if (numberOfLives) {
    alert("Sorry, game over")
} else  {
    alert("Sorry, game over")
}


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "snowing";
if (weather) {
    alert("It's snowing")
} else  {
    alert("Sunny day!")
}



//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 11;
if (numberInput) {
    alert("number is greater than 10)
} else  {
    alert("The number is less than ten")
}



//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
alert("Plese input number of lives");
if (numberOfLives) {
    alert("Sorry, game over")
} else  {
    alert("Next level")
}


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// var confirmed = confirm('Are you atleasts 13 years old?');
// if (numberOfLives) {
//     alert("You may proceed")
// } else  {
//     alert("Sorry, you are not able to proceed")
// }

var confirmedOver13 = function (age) {
     if (age >= 13){
         alert("You may proceed")
         else {
             alert("Sorry you are not able to procdeed")
         }
     confirmedOver13(13);
     }
    }

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
var weather = "snowing";

    if (weather === "snowing") {
        alert("Its snowing") }
    else  {
        alert("Its raining") {
    else if {
        alert("take cover") {
    else {
        alert("Have a nice day") {
            }
    }

//TODO Together: refactor the above statement as a function



//TODO: Write a function that accepts a string that is a traffic light color as an input.
// When this function is called, it should return a message informing the user what to
// do when approaching that color light at an intersection.

var chekTrafficLight = function (color) {
    if (color === "reen") {
    alert("color is green") {
    }
    }
}
            }

// chekTrafficLight:("enter what you are checkin for here if not a color")




// ================ NESTED STATEMENTS ===============
//TODO Together:

// 1--If user is under 15, they are not eligible for a learners permit, else they are.
// 2-- If they are eligible, check age.
// 3-- If they are 15 they are eligible for a learners permit,
// 4-- if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

var age = 10;
var havePermit = true;

        if (age < 15) {
            alert("Not elegible")
        } else {
                if (age >= 16 && havePermit) {
                    alert("You are eligible for a permit")
                } else if (age > = 16 && !havePermit)
                    alert("You are not eligible for a license becausee you do not have a permit.")
            }
            else {
                alert("You are eligible for a lerarnes permit.")
        }
    }



// ================ TERNARY STATEMENT ================
//TODO Together: Regular way - rewrite as ternary

var message;
var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);

//WRITE YOUR TERNARY STATEMENT HERE!

    // message = (success) ? "value if true" : "Ops something went wrong")

        // message = (success) ? "value if true" : (name === "hung") ? "Ops something went wrong")
        console.log(message);



//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }
// console.log(weatherMessage);

//WRITE YOUR TERNARY STATEMENT HERE!
     weatherMessage = (weather === "rainy") ? "Have a nice day!" : "It's raining!");
    cosole.log(weatherMessage);


// =============== SWITCH STATEMENT ================
var num = 1;
switch (num) {
    case 0:
        console.log("You turned on the lights")
        break;
    case 1:
        console.log("You turned off the lights")
        break;
    case 2:
        console.log("Someone else turned on the lights")
        break;
    case 3:
        console.log("Someonething")
        break;
    default:
        console.log("default case")
}

//TODO Together:

var pizzaPreference = prompt("What kind of pizza do you like?");
console.log("User pizza input: " + pizzaPreference);

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else if (pizzaPreference === "ham") {
    alert("Ham is easy to spell and awesome!");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}

// var num = 1;
switch (pizzaPreference) {
    case pineapple and hot sauce:
        alert("Pinnable sound good to me.")
        break;
    case cheese:
        alert("Cheese piza is a little bland, but go for it!")
        break;
    case ham:
        console.log("A ham pizza sounds great")
        break;
    default:
        alert.(pizzaPreference + " this is not my fav pizza"")
}


//TODO: Write a switch statement that evaluates weather as the condition.
// Check for "rainy", "sunny", "snow", and a default case.

switch (weather) {
    case rainy:
        console.log("It is a rainy day.")
        break;
    case sunny:
        console.log("Yeah! Lets surf!")
        break;
    case snow:
        console.log("Im thinking lets go build a snow man")
        break;
    default:
        console.log("have a nice day")
}


//TODO: Rewrite the intersection function from earlier as a switch statement.

var color = prompt("Please enter a color: red, green or yellow);
switch (color) {
    case green:
        alert("The light is green, so GO")
        break;
    case yello:
        alert("The light is yellow. CAUTION!")
        break;
    case red:
        console.log("The light is red. Stop")
        break;
    default:
        alert.("Please select a color")
}

// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

