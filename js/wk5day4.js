

function frequency(input) {

    var input = input.toLowerCase().split("");

    dict = {};
    for (var i = 0; i < input.length; i++) {

        // https://stackoverflow.com/questions/18690814/how-to-increment-an-object-property-value-if-it-exists-else-set-the-initial-val contributed by "snak" 09/09/2013
        // dict input at i iterates through input and dict[input[i]] is true(exists) add 1, when dict[input[i]] is false or DNE dict[input[i]]
        // which is the value of input array at i is created with a value 0

            dict[input[i]] = (dict[input[i]] || 0) + 1;
        }
    return dict;
}

var things = "RaceCar";

console.log(frequency(things));