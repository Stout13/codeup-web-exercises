// Create a function where you prompt for a number 1-3 and have the number picked return a color.
// 1 = blue, 2 = yellow, 3 = red.
//create a function. asking for a prompt for a number.
// make the function return the corresponding color for the number chosen with an alert.
// if the number chose is not 1-3 return with an alert that "that color is lameo".

function colorLotto() {
    // 1 = blue, 2 = yellow, 3 = red.
    var num = prompt("pick a number 1-3, and I will say a color with glee");

    if (num < 1 || num > 3) {
        alert("that color is lameo");
    } else {
        if (num === 1) {
            alert("blue");
        } else if (num === 2) {
            alert("yellow");
        } else {
            alert("red");
        }
    }
}

colorLotto();