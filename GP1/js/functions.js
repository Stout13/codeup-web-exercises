"use strict";

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
var nameOf = "Andrew"
function sayHello(name) {
    return "Hello, " + name;

}

// When called, the function should return a message that says hello to the passed in name.



// Example
// sayHello("codeup") // returns "Hello, codeup!"
//

//
// TODO:
// Call the function 'sayHello' and pass your name as a string literal argument.
// Store the result of the function call in a variable named 'helloMessage'.
var helloMessage = sayHello(nameOf);
console.log(helloMessage);
// console.log 'helloMessage' to check your work

//
// TODO:


var myName = "Andrew"
// Store your name as a string in a variable named 'myName', and pass that
// variable to the 'sayHello' function. You should see the same output in the
// console.

sayHello(myName);
//

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
var random = Math.floor((Math.random()*10));

function isTwo(random) {
 if (random == 2) {
   return true;
  }
  else {
    return false;
  }
}

//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.



// * Example
// * > isTwo(1) // returns false
// * > isTwo(2) // returns true
// * > isTwo(3) // returns false
// *
// * Call the function 'isTwo' passing the variable 'random' as a argument.
// *
// * console.log *outside of the function* to check your work (you should see a
// * different result everytime you refresh the page if you are using the random
// * number)
// */

//
//  * TODO:
// * Create a function named 'calculateTip' to calculate a tip on a bill at a



var tip = prompt("what percent tip do you want to leave?");
var total = prompt("what is the total?");
// * restaurant. The function should accept a tip percentage and the total of the
// * bill, and return the amount to tip
var tipAmount;
function calculateTip(tip, total) {
    var tipAmount = tip * total;
    alert(console.log("you should tip " + tipAmount));
    return tipAmount;
}


calculateTip(tip, total);








// *
// * Examples:
// * > calculateTip(0.20, 20) // returns 4
// * > calculateTip(0.25, 25.50) // returns 6.375
// * > calculateTip(0.15, 33.42) // returns 5.013
// *

//
// TODO:


// Use prompt and alert in combination with your calculateTip function to
// prompt the user for the bill total and a percentage they would like to tip,
// then display the dollar amount they should tip
//

//
//  TODO:
//  Create a function named `applyDiscount`. This function should accept a price
//  (before a discount is applied), and a discount percentage (a number between 0
//  and 1). It should return the result of applying the discount to the original
//  price.

function applyDiscount(price, percOff) {
    var newPrice = (percOff)/100*price;
    console.log(newPrice);
    return newPrice;
}
var coffeeMaker = 129.99;
var sale = 20;
applyDiscount(coffeeMaker, sale);




//  Example:
//  > var originalPrice = 100;
//  > var discountPercent = .2; // 20%
//  > applyDiscount(originalPrice, discountPercent) // 80
//
//  > applyDiscount(45.99, 0.12) // 40.4712
//