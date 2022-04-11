// Your solutions will go here :)

// Thanks! :D
//

//
// Define a function named lowerCase that takes in an input and returns that input as a string in all lower case
// letters. Returns false if the input passed is not a string.
// lowerCase('CODEUP')                             // codeup
// lowerCase('George WashingTon')                  // george washington
// lowerCase(0)                                    // false
// lowerCase(true)                                 // false
// lowerCase('BoBby')                              // bobby
// lowerCase(null)                                 // false
// lowerCase([1,2,3])                              // false
// lowerCase({fName: 'Bruce', lName: 'Wayne'})     // false

function lowerCase(input) {
    // console.log(typeof input)
//    object boolean undefined number
    if (typeof input === "object" || typeof input === "boolean" || typeof input === "undefined" || typeof input === "number") {
        return false;
    }
//     if (typeof input !== "string") {
//         return false;
//     }
    else {
        // lowercases input, does not check for other inputs
        return input.toLowerCase();
    }
}

//
// // Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are
// // lowercase otherwise it should return false.
// // isAllLowerCase('codeup')                            // true
// // isAllLowerCase('hello there')                       // true
// // isAllLowerCase('BoBby')                             // false
// // isAllLowerCase('George WashingTon')                 // false
// // isAllLowerCase(0)                                   // false
// // isAllLowerCase(true)                                // false
// // isAllLowerCase(null)                                // false
// // isAllLowerCase([1,2,3])                             // false
// // isAllLowerCase({fName: 'Bruce', lName: 'Wayne'})    // false
//
function isAllLowerCase(input) {
    // comparing lowercased input to old input.  if new === old => is all lower case
    var lwrTest = input
    if (typeof lwrTest !== "string") {
        return false;
    }
    else if (lwrTest.toLowerCase() === input) {
        return true;
    }
    else {
        return false;
    }
}
//
// // Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string
// // are uppercase otherwise it should return false.
// // isAllUpperCase('CODEUP')                            // true
// // isAllUpperCase('HELLO THERE')                       // true
// // isAllUpperCase('BoBby')                             // false
// // isAllUpperCase('codeup')                            // false
// // isAllUpperCase('George WashingTon')                 // false
// // isAllUpperCase(0)                                   // false
// // isAllUpperCase(true)                                // false
// // isAllUpperCase(null)                                // false
// // isAllUpperCase([1,2,3])                             // false
// // isAllUpperCase({fName: 'Bruce', lName: 'Wayne'})    // false
//
function isAllUpperCase(input) {
    var uprTest = input
    if (typeof uprTest !== "string") {
        return false;
    }
    else if (uprTest.toUpperCase() === input) {
        return true;
    }
    else {
        return false;
    }
}
//
// // Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome,
// // if the string is palindrome should return false.
// // isNotPalindrome('Kayak')                             // false
// // isNotPalindrome('George WashingTon')                 // true
// // isNotPalindrome(0)                                   // true
// // isNotPalindrome(true)                                // true
// // isNotPalindrome('civic')                             // false
// // isNotPalindrome(null)                                // true
// // isNotPalindrome()                                    // true
// // isNotPalindrome([1,2,3])                             // true
// // isNotPalindrome({fName: 'Bruce', lName: 'Wayne'})    // true
//
//
// // should return true when called without passing an argument
// // should return true when passed argument undefined
// // should return true when passed argument null
// // should return true when passed the number 64
// // should return true when passed the number -381
// // should return true when passed the boolean true
// // should return true when passed the boolean false
// // should return true when passed an object
// // should return true when passed an array
//
function isNotPalindrome(input) {
    if (input === undefined || input === null) {
        return true;
    }
    else if (input === "") {

    }
    var lwr = input.toString().toLowerCase();
    var stringify = Number(lwr);
    if (stringify == NaN) {
        return false;
    }
    console.log(lwr);
    var palindrome = lwr.split("").reverse().join("");
    console.log(palindrome);


    if (lwr === palindrome){
        return false;
    }
    else if (palindrome == NaN) {
        return true;
    }
    else {
        return true;
    }
}
//     // console.log(typeof input)
//     var lwr = input.toLowerCase();
//     var rev = lwr.split("").reverse().join("");
//     if (typeof input === "object" || typeof input === "boolean" || typeof input === "undefined" || typeof input === "number" || input < 0) {
//         return false;
//     }
//     // if (input == "NaN" || input === undefined) {
//     //     return false;
//     // }
//     else if (rev !== lwr) {
//         return true;
//     }
//     else if (typeof input == "number") {
//         return false;
//     }
//     else {
//         return false;
//     }
// }


//
//
//
//
// // Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric.
// // If the input is Not A Number, then return false.
// // multiplyBy2(2)                     // 4
// // multiplyBy2("4")                   // 8
// // multiplyBy2("-5.5")                // -11.0
// // multiplyBy2(5.5)                   // 11
// // multiplyBy2(null)                  // false
// // multiplyBy2(true)                  // false
// // multiplyBy2(false)                 // false
//
function multiplyBy2(input) {
    // string object number undefined boolean
    var og = String(input)
    var og1 = Number(og)
    if(isNaN(og1) === true || input === null || input === undefined) {
        return false;
    }
    else if (typeof input === "object"|| typeof input === "boolean"|| typeof input === "undefined") {
        return false;
    }
    // console.log(typeof input)
    // String(input);
    // Number(input);
    // if (input == "NaN" || input === undefined) {
    //     return false;

    else {

        return input*2;
    }
}
//
// // Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number
// // of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.
// // convertHourToSec(0)                 // 0
// // convertHourToSec(1)                 // 3600
// // convertHourToSec(1.5)               // 5400
// // convertHourToSec(true)              // false
// // convertHourToSec(-1)                // false
// // convertHourToSec(null)              // false
// // convertHourToSec("2")               // 7200
//
function convertHourToSec(input) {
    // console.log(input);
    input = Number(String(input));
    if (isNaN(input) || input < 0) {
        return false;
    } else {
        return input * 3600;
    }
}
//     input = Number(String(input));
//     if (input == "NaN" || input === undefined) {
//         return false;
//     }
//     else if (input < 0) {
//         return false;
//     }
//     else {
//         return input*60*60;
//     }
// }
//
// // Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings,
// // then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.
// // getLowestNumber(1, 3, 2)            // 1
// // getLowestNumber("0", 1, 2)          // 0
// // getLowestNumber(9, 3, -20)          // -20
// // getLowestNumber(2, 2, 2)            // 2
// // getLowestNumber(2, 5, 5)            // 2
// // getLowestNumber(1, 2, 'x')          // false
// // getLowestNumber("a", "b")           // false
// // getLowestNumber()                   // false
//
function getLowestNumber(input1, input2, input3) {

    input1 = Number(String(input1));
    input2 = Number(String(input2));
    input3 = Number(String(input3));
    if (isNaN(input1) || isNaN(input2) || isNaN(input3)) {
        return false;
    }
    else {
    // if (typeof input1 === "number" && typeof input2 === "number" && typeof input3 === "number") {
        var arr = [input1, input2, input3];
        arr = arr.sort();
        // console.log(arr[0]);
        return arr[0];
    }
    // else {
    //     return false;
    // }
}

// // Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings,
// // addStringLengths returns the sum after adding the length (number of characters) of both strings.
// // If either or both inputs are not strings, return false.
// // addStringLengths(1, 2)                       // false
// // addStringLengths("code", "up")               // 6
// // addStringLengths("1 2 3", "4 5 6")           // 10
// // addStringLengths("ranking", 1)               // false
// // addStringLengths(null, null)                 // false
// // addStringLengths(true, false)                // false
// // addStringLengths(["code", "up"], "rocks!")   // false
// // addStringLengths("", ""));                   // 0
//
function addStringLengths(input1, input2) {

    if (typeof input1 !== "string" || typeof input2 !== "string") {
        return false;
    }
    else {
        String(input1);
        String(input2);
        return input1.length + input2.length;
    }
}
//
// // Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings,
// // subtract will return the difference when the second input is subtracted from the first input.
// // If one or both inputs is not numeric or numeric strings, subtract should return false.
// // subtract(10, 2)                     // 8
// // subtract(0, 0)                      // 0
// // subtract(-4, 1)                     // -5
// // subtract("10", 2)                   // 8
// // subtract(5, true)                   // false
// // subtract(true, false)               // false
// // subtract("Monday", "Tuesday")       // false
// // subtract()                          // false
//
function subtract(in1, in2) {
    in1 = Number(String(in1));
    in2 = Number(String(in2));
    // if (typeof in1 !== "number" || typeof in2 !== "number" ||
    if (isNaN(in1) || isNaN(in2)) {
        return false;
    } else {
        return in1 - in2;
    }
}
    // else {
    //     return false;
    // }

//     if (typeof in1 + in2 == "string") {
//         if (typeof in1 != "boolean" && typeof in2 != "boolean") {
//             if (typeof Number(in1) === "number" && typeof Number(in2) === "number") {
//                 return false;
//             } else {
//                 return (Number(in1) - Number(in2));
//             }
//         }
//     }
// }
//
// // Write a function named calculateChange that takes in two inputs, totalPaid and totalCost.
// // If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost
// // from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decial places.
// // If either or both inputs are not numeric or numeric strings, calculateChange should return false.
//
function calculateChange(totalPaid, totalCost) {
    var paid = Number(String(totalPaid));
    var cost = Number(String(totalCost));
    if (isNaN(paid) || isNaN(cost)) {
        return false;
    } else {
        // if (typeof totalPaid + totalCost == "string") {
        //     if (typeof totalPaid != "boolean" && typeof totalCost != "boolean") {
        //         if (typeof Number(totalPaid) === "number" && typeof Number(totalCost) === "number") {
        var change = paid - cost;
        return "$" + (change.toFixed(2));
    }
}
    // else {
    //     totalPaid = Number(totalPaid);
    //     totalCost = Number(totalCost);
    //     var change = totalPaid - totalCost;
    //     console.log("$" + change.toFixed(2));
    //     return ("$" + change.toFixed(2));
    //
    // }

//
// // var totalPaid = "30.55";
// // var totalCost = 29.99;
// //
// // console.log(calculateChange(totalPaid, totalCost));
//
//
//
// // calculateChange(7.50, 1.50)         // $6.00
// // calculateChange(10, 5)              // $5.00
// // calculateChange("100", 50)          // $50.00
// // calculateChange(10, true)           // false
// // calculateChange([1, 2, 3], 10)      // false
// // calculateChange("Codeup", 100)      // false
// // calculateChange()                   // false