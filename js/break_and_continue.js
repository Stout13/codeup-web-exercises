function oddList() {
    var playAgain = true
    if (playAgain === true) {
        var num = Number(prompt("Ok, enter an odd number between 1-49\nin digital format (not spelled out) and hit enter or press ok"));
        // alert('wow, that was an actual number between 1 and 50!')
        for (var i = 1; i <= 50; i += 2) {
            if (i !== num) {
                console.log(i);
            }
            else {
                console.log("skip " + num);
            }
            continue;
        }
    }
    playAgain = confirm("would you like to, after entering an odd number\n from 1-49... receive a list of odd numbers\nbetween 1-49 except the one you have given???\nok=Y, cancel = I'd really rather not...")
    if (playAgain === true) {
        oddList()
    }
    else {
        return;
    }
}

oddList()