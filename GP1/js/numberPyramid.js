function numberPyramid() {
    var ones = ""
    var pyramidSize;
    do {pyramidSize = prompt("to build a pyramid up to 9 units in height enter a number 1-9")}
    while(pyramidSize<1 || pyramidSize >9)
    // var pyramidSize = prompt("congratulations regarding your recent purchase of a miniature digital scaling pyramid!\n please select the height of your pyramid measured in sandstone blocks\n and prepare to be amazed(each function good for 1 pyramid only, limited by available memory\nand potentially other factors such as screen width, resolution, and font size... most pyramids will have a unit height/base less than 20... no refunds)")
    for (var i=1; i<pyramidSize; i++) {
         ones = ones + "1";
         console.log((Number(ones))*i);
        }
}

numberPyramid()



// create a function which builds a digital pyramid
// 1
// 22
// 333
// 4444
// to user defined height using a prompt
// and displays using console.log
//
// Pseudocode:
// create a function with no parameters
// assign an empty string to a variable which will eventually contain a string of 1s
// instantiate a variable to hold the user defined value 1-9 which will determine the size of the pyramid
// create a do while that prompts the user for a value and assigns it to the variable intantiated in the previous step
// modify the while condition at the end so that the prompt runs continually until the user enters a number 1-9
// create a for loop whitin the do-while to build a base of 1s by concatenating 1 to the empty string variable.
// each time you concatenate, multiply the string by the iteration number 'i' 3 * 111 after CONVERTING the string to a number 11111 using Number()
// print out each result as it is created in each iteration
// return;