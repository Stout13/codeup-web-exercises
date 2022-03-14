

  "use strict";

  // Don't change the next two lines!
  // These creates two variables for you:
  //     one with the colors of the rainbow
  //     another with a single random color value
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  var color = colors[Math.floor(Math.random()*colors.length)];

  var favorite = 'blue'; // TODO: change this to your favorite color from the list

  // TODO: Create a block of if/else statements to check for every color except indigo and violet.

function favoriteColor {
  for (x in colors) {
    if (x === 'red') {
      console.log('red'+' is the color of a '+' firetruck');
    }

    if (x === 'orange') {
      console.log('orange'+' is the color of a '+' traffic cone');
    }
    if (x === 'yellow') {
      console.log('yellow'+' is the color of a '+' rain jacket');
    }

    if (x === 'green') {
      console.log('green'+' is the color of the '+' grass');
    }

    if (x === 'blue') {
      console.log('blue'+' is the color of the '+' skies');
    }

    else {
      console.log('I do not know anything by that color.');
    }
    var theColor = colors[x]
    return ((theColor === favorite) ? 'it matches' : 'it doesn\'t match');
    }
  }
}
console.log(favoriteColor(true));

console.log(favoriteColor(false));

console.log(favoriteColor(null));

// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
