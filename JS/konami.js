var keystrokes = [];
//
//

var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var current = -1;


$(document).keyup(function keystrokeLog(event){
    keystrokes.push(e.value);
    if (konamiCode.indexOf(keystrokes.key) < 0) {
        current = 0;
        return;
    }
    else if (keystrokes.join(',').includes(konamiCode.join(','))) {
        $('#konami-Entered').setAttribute('http-equiv', "refresh");
        $('#konami-Entered').setAttribute('content', "5");
        $('#konami-Entered').setAttribute('url', 'https://jsnes.org/');
        // http-equiv = "refresh" content = "3; url = https://www.qries.com" />

    }
});
// });
// function keystrokeLog(e) {
//     keystrokes.push(e.value);
//     if (konamiCode.indexOf(keystrokes.key) < 0) {
//         current = 0;
//         return;
//     }
//     else if (keystrokes.join(',').includes(konamiCode.join(','))) {
//         $('#konami-Entered').setAttribute('http-equiv', "refresh");
//         $('#konami-Entered').setAttribute('content', "5");
//         $('#konami-Entered').setAttribute('url', 'https://jsnes.org/');
//         // http-equiv = "refresh" content = "3; url = https://www.qries.com" />
//
//     }
// };
//
//
//



//
// function konamiCodeChecker(e) {
//     keystrokeLog(e)
// }

$('#key-field').keypress(keystrokeLog(e));

