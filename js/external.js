
alert("Welcome to Javier's Website!");

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know
// yet if they're going to like it). If price for a movie per day is $3, how much
// will you have to pay?

// var littleM = 3;
var littleM = prompt("How many day will you be renting the Little Mermaid for?")
// console.log("You are renting the Little Mermaid for " + littleM + " days");

// var brotherB = 5;
var brotherB = prompt("How many day will you be renting the Brother Bear for?")
// console.log("You are renting the Brother Bear for " + brotherB + " days");

// var hercules = 1;
var hercules = prompt("How many day will you be renting the Hercules for?")
// console.log("You are renting the Hercules for " + hercules + " days");

var totalCost = (littleM + brotherB + hercules) * 3;
// console.log("Your total cost is: $" + totalCost.toFixed(2));

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;
var totalGooglePay = googlePay * googleHours;
var totalAmazonPay = amazonPay * amazonHours;
var totalFacebookPay = facebookPay * facebookHours;
var totalPay = totalGooglePay + totalAmazonPay + totalFacebookPay;
console.log("Total payment for this week: $" + totalGooglePay.toFixed(2));

////////////////////////////////////////////////////
// console.log(totalAmazonPay);
// console.log(totalFacebookPay);
// console.log("Your total pay is: $" + (totalGooglePay + totalAmazonPay + totalFacebookPay));
// console.log(`Your total pay is: ${totalPay}`);
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var enrolled;
var notFull = 1;
var notConflict = 1;

// console.log(enrolled);
enrolled = notFull && notConflict;
// console.log(enrolled);

//////////////////////////////////////////////

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var moreThan2 = 1;
var notExpired = 1;
var premiumMem = 0;
// var offerApplied = (moreThan2 && notExpired) || (premiumMem && notExpired);
var offerApplied = (moreThan2 || premiumMem) && notExpired;
console.log("Here, 1 = true, and 0 = false. So the answer is==> "  + offerApplied);

//////////////////////////////////////////////

var username = "codeup";
var password = 'notastrongpassword';
var passAtLeastFive = password.length >= 5;

var passNotIncludeInUN = password.indexOf(username) === -1;

var usernameAtLeastTwenty = username.length <= 20;
var noLeadingTrailingWS = (username === username.trim()) && (password === password.trim());
console.log("Is the password atleast 5 characters long? " + passAtLeastFive);

console.log("The password is not included in the UN, right? " + passNotIncludeInUN);
console.log("Is the UN atleast 20 characters long? " + usernameAtLeastTwenty);

console.log("Did we get rid of the blank spaces in the start or end of the PW or UN? " + noLeadingTrailingWS);