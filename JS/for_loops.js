// function multiplicationTable() {
//     var multiply = confirm("Would you like to see a multiplication table?");
//     if (multiply === true) {
//         var num = prompt("enter a number to see a multiplication table?")
//         var i;
//         for (i = 1; i < 10; i++) {
//             console.log(num + " x " + i + " = " + num * i);
//         }
//         return;
//     }
// }


// multiplicationTable();
//
// function numberPyramid() {
//     var i;
//     for (i = 1; i < 10; i++) {
//         var x
//         var arr = [];
//         for (x = 0; x < i; x++) {
//             arr.push(i)
//         }
//
//         console.log(arr.join().replaceAll(",", ""));
//     }
// }

// function numberPyramid() {
//     var pyramid = "111111111";
//     for (i = 1; i < 10; i++) {
//         for (var x in pyramid.length) {
//             Number(pyramid.substring(0, x))
//         }
//
//
//     }
// }

// numberPyramid();



function countDownX() {
    var count;
    for (count = 0; count <= 20; count++) {
        console.log(100-count*5);
    }
}

countDownX();

function generateRandom() {
    for (var i = 1; i<10; i++) {
        var num = Math.floor(Math.random() * 180 + 20);
        var odEve;
        if (num % 2 === 0) {
            odEve = " is even";
        } else {
            odEve = " is odd";
        }
        console.log(num + odEve);
    }
    return;
}

generateRandom();

