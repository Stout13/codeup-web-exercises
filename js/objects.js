(function() {
    "use strict";

    // *
    //  * TODO:
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.
    var person = {
        firstName: "Michael",
        lastName: "Kestler",
        sayHello: function(){
            return "Hello from " + person.firstName + " " + person.lastName;
        }
    }

    console.log(person.firstName) //"Michael"
    console.log(person.lastName) //"Kestler"

    console.log(person.sayHello())




    var person = {
        firstName: "Susan",
        lastName: "Saranwrap",
        sayHello: function(){
            return "Hey " + person.firstName + " Mc" + person.lastName + "pants!";
        }
    }
    console.log(person.firstName)
    console.log(person.lastName)
    console.log(person.sayHello())
    //  *
    //  *
    //  * Example:
    //  *  > console.log(person.firstName) // "Rick"
    //  *  > console.log(person.lastName) // "Sanchez"

    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work




    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */
    //
    // /** TODO:
    //  * HEB has an offer for the shoppers that buy products amounting to
    //  * more than $200. If a shopper spends more than $200, they get a 12%
    //  * discount.
    //
    //
    var customers = [
        {customer: 'Cameron', amount: 180},
        {customer: 'Ryan', amount: 250},
        {customer: 'George', amount: 320}
    ];


    function amtPaid(shoppers) {

        var discount = .12;
        console.log(discount);

        //for (var i = 0; i < shoppers.length; i++) {
        shoppers.forEach(function(shopper) {
            if (shopper.amount > 200) {
                var discountAmt = (Math.round(100 * shopper.amount * discount) / 100);
                console.log(discountAmt);
                var total = shopper.amount - discountAmt;
                console.log(total);
                console.log("Congratulations " + shopper.customer + "! You saved $" + discountAmt + " off of $" + shopper.amount + " your total is $" + total + ".");
                shopper.total = total;
                shopper.gotSale = true;
            }
            else {
                shopper.total = (Math.round(100*shopper.amount)/100);
                shopper.gotSale = false;
                console.log("Thanks for shopping with us $" + shopper.customer + ". Your total is $" + shopper.total +".")
            }
        });
    }

    amtPaid(customers);

    //  Write a JS program, using conditionals, that logs to the
    //  * browser, how much Ryan, Cameron and George need to pay. We know that
    //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
    //  * display a line with the name of the person, the amount before the
    //  * discount, the discount, if any, and the amount after the discount.
    //  *
    //  * Uncomment the lines below to create an array of objects where each object
    //  * represents one shopper. Use a foreach loop to iterate through the array,
    //  * and console.log the relevant messages for each person
    //  */
    //




    // * TODO:
    //  * Create an array of objects that represent books and store it in a
    //  * variable named `books`. Each object should have a title and an author
    //  * property. The author property should be an object with properties
    //  * `firstName` and `lastName`. Be creative and add at least 5 books to the
    //  * array
    //  *

    var libraryItems = [
        {type: "book", title: "On_War", author: "Clausewitz, Carl von"},
        {type: "book", title: "Aesthetic_Theory", author: "Adorno, Theodore W"},
        {type: "book", title: "Solaris", author: "Lem, Stanislaw"},
        {type: "book", title: "Indignation", author: "Roth, Philip"},
        {type: "book", title: "Toward_A_Psychology_of_Being", author: "Maslow, Abraham"}


    ]


    //  * Example:
    //  * > console.log(books[0].title) // "The Salmon of Doubt"
    //  * > console.log(books[0].author.firstName) // "Douglas"
    //  * > console.log(books[0].author.lastName) // "Adams"
    //
    // /**
    //  * TODO:




    //  * Loop through the books array and output the following information about
    //  * each book:
    //  * - the book number (use the index of the book in the array)
    //  * - the book title
    //  * - author's full name (first name + last name)
    //  *



    //  * Example Console Output:
    //  *
    //  *      Book # 1
    //  *      Title: The Salmon of Doubt
    //  *      Author: Douglas Adams
    //  *      ---
    //  *      Book # 2
    //  *      Title: Walkaway
    //  *      Author: Cory Doctorow
    //  *      ---
    //  *      Book # 3
    //  *      Title: A Brief History of Time
    //  *      Author: Stephen Hawking
    //  *      ---
    //  *      ...
    //  */
    //
    // /**
    //  * Bonus:
    //  * - Create a function named `createBook` that accepts a title and author
    //  *   name and returns a book object with the properties described
    //  *   previously. Refactor your code that creates the books array to instead
    //  *   use your function.
    //  * - Create a function named `showBookInfo` that accepts a book object and
    //  *   outputs the information described above. Refactor your loop to use your
    //  *   `showBookInfo` function.
    //  */

})();
