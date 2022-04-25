// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

function removeThree(array) {
    for (var i=0; i<array.length; i++) {
        if (i<3) {
            array = array.shift();
        }
        else {
            return array;
        }
    }
}



// 2.  Write an object that describes which brands own which cereals (you can be creative here) . After the object has been declared …
// A) add properties and values to the existing object
// B) re-assign 2 properties’ values


var serialMonopoly = {
    majorCerealBrands: [
        {Kelloggs: ['rice-crispies', 'pops', 'frosted-flakes', 'fruit-loops']},
        {General_Mills: ['cinnamon-toast-crunch', 'lucky-charms', 'cocoa-puffs', 'cheerios']}
    ]
};

var quaker = {Quaker_Oats: ['life', 'rolled-oats', 'granola', 'quisp']};

serialMonopoly.majorCerealBrands[3] = quaker;