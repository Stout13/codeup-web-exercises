function oddList() {
    if (true) {
        alert("to receive a list of odds between 1-49 excluding a user-entered odd number, enter an odd number when prompted\ Or, enter anything else when prompted or enter nothing then press enter/click continue\n then select cancel...")
        var num = Number(prompt("Ok, enter an odd number between 1-49\nin digital format (not spelled out) and hit enter or press ok"));
        if (num % 2 === 0 || num < 1 || num >49) {
            alert('I don\'t think that was odd... was that a negative number? It needs to be an odd number between 1-49')
            oddList()
        }
        else {
            var i = 1;
            while(i < 50) {
                if (i !== num) {
                    console.log(i);
                    i += 2;
                } else {
                    console.log("skip " + num);
                    i += 2;
                }
            }
        }
    }
    var playAgain = confirm("would you like to, after entering an odd number\n from 1-49... receive a list of odd numbers\nbetween 1-49 except the one you have given???\nok=Y, cancel = I'd really rather not...")
    if (playAgain === true) {
        oddList()
    }
}

oddList()