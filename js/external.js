console.log("Hello from external JavaScript");
alert('Welcome to my website');
console.log(`my favorite color is ${prompt('what is your favorite color')}`)

function payTotal() {

    var theLittleMermaid = 3;
    var brotherBear = 5;
    var hercules = 1;
    var pricePerDay = 3;
    var payTotal = pricePerDay*(theLittleMermaid + brotherBear + hercules);

    console.log("the total amount paid is " + payTotal);
    return payTotal;
}

payTotal();


