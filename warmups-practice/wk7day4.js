// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

function continentTag(capital, continent) {
    for (var i = 0; i<capital.length; i++) {
        // var addContinent = {continent: continent}
        capital[i].continent = continent;

        // push(addContinent)
    }
    console.log(capital)
    return capital;
}


var capitals = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }]
var continent = 'Asia'
continentTag(capitals, continent);