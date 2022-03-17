"use strict";

/* ########################################################################## */


 // * TODO:
 // * Create a function named `analyzeColor` that accepts a string that is a color
// function analyzeColor(color) {
//     if (color === 'red') {
//         alert("A rose by any other name would smell as sweet");
//         return "A rose by any other name would smell as sweet";
//
//     }
//     else if (color === 'orange') {
//         alert("Orange you glad to see me?");
//         return "A rose by any other name would smell as sweet";
//
//
//     } else if (color === 'yellow') {
//         alert("When yellow leaves, or none, or few, do hang...");
//         return "When yellow leaves, or none, or few, do hang...";
//
//     } else if (color === 'green') {
//         alert("Dost lead the revels of the May;/n" +
//             "And this is thy dominion.");
//         return "Dost lead the revels of the May;/n" +
//             "And this is thy dominion.";
//
//     } else if (color === 'blue') {
//         alert("To Lawrence, the sea, to Frost the sky");
//         return "To Lawrence, the sea, to Frost the sky";
//
//     } else if (color === 'indigo') {
//         alert("twilight forgetting");
//         return "twilight forgetting";
//
//     } else if (color === 'violet') {
//         alert("are blue... obv");
//         return 'violet';
//
//     } else {
//         alert("wow, is that a real color?");
//         return 'wow, is that a real color?';
//     }
// }
 // * name as input. This function should return a message which relates to the
 // * color stated in the argument of the function. For colors you do not have
 // * responses written for, return a string stating so
// console.log(analyzeColor("red"));


// *
 // * Example:
 // *  > analyzeColor('blue') // returns "blue is the color of the sky"
 // *  > analyzeColor('red') // returns "Strawberries are red"
 // *
 // *
 // *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 // *
 // * You should use an if-else-if-else block to return different messages.
 // *
 // * Test your function by passing various string literals to it and
 // * console.logging the function's return value

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


//  *
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.

// console.log(analyzeColor(randomColor));

//  * You should see a different message every time you refresh the page



// *
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement

function analyzeColor(color) {
    switch(color) {

        case "red":

            return "A rose by any other name would smell as sweet";

        case 'orange':

            return "A rose by any other name would smell as sweet";

        case 'yellow':

            return "When yellow leaves, or none, or few, do hang...";

        case 'green':

            return "Dost lead the revels of May\nAnd this is thy dominion.";

        case 'blue':

            return "To Lawrence, the sea, to Frost the sky";

        case 'indigo':

            return "twilight forgetting";

        case 'violet':

            return 'violet';

        default:

            return 'wow, is that a real color?';
    }
}

analyzeColor(randomColor);




//  *
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the

var userInputColor = prompt("Pick a color!");

//  * user to your `analyzeColor` function. Alert the return value from your

alert(analyzeColor(userInputColor));

//  * function to show it to the user.




/* ########################################################################## */

// *
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
var myLuckyNumber = Math.floor(Math.random() * 6);
var total = prompt('how much are your groceries?');

function calculatedTotal(myLuckyNumber, total) {
    switch (myLuckyNumber) {
        case 1:
            var paid = 1-.1;
            var newTotal = paid*total;
            alert("congrats, your number is " +"1");
            alert(" and your new total is " +newTotal);
            alert("you would have paid " + total);

            return newTotal;
        case 2:
            var paid = 1-.25;
            var newTotal = paid*total;
            alert("congrats, your number is " + "2")
            alert(" and your new total is " +newTotal);
            alert("you would have paid " + total);

            return newTotal;
        case 3:
            var paid = 1-.35;
            var newTotal = paid*total;
            alert("congrats, your number is " + "3" );
            alert(" and your new total is " +newTotal);
            alert("you would have paid " + total);

            return newTotal;
        case 4:
            var paid = 1-.5;
            var newTotal = paid*total;
            alert("congrats, your number is " + "4");
            alert(" and your new total is " +newTotal);
            alert("you would have paid " + total);
            return newTotal;
        case 5:
            var paid = 1-1;
            var newTotal = paid*total;
            alert("congrats, your number is " + "5");
            alert(" and your new total is " +newTotal);
            alert("you would have paid " + total);

            return newTotal;
        default:
            alert("some dogs just won't hunt");
            return;

    }
}

//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.

calculatedTotal(myLuckyNumber, total);

//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0

//  * Test your function by passing it various values and checking for the expected
//  * return value.

// *
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)



//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
// Generate a random number between 0 and 6


// *
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:

function numberThings() {
    var doNumberThings = confirm("Would you like to enter a number?");
    if (doNumberThings === true) {
        var userNumber = prompt("aight, shoot ya shot");
    }
    var isOdd = (userNumber % 2 !== 0);
    var isPlussed = Number(userNumber) + 100;


    if (isOdd === true) {
        alert('This number is odd...');
    }
    else {
        alert('This number is even...');

    }
    alert("The number plus 100 is " + isPlussed + " ...");

    if (userNumber<0) {
        alert("The number is negative");
    }
    else if (userNumber>0) {
        alert("The number is positive");
    }
    else {
        alert("when yer up yer up, and when yer down yer down, and when yer only half way up, yer neither up nor down")
    }
}

numberThings();
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
