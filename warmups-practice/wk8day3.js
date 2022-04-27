// Write a function that takes two date instances as argument

function daysBetween(day1, day2) {
    // https://www.programiz.com/javascript/date-time
    const firstDay = new Date(day1);
    const secondDay = new Date(day2);
    var daysBetween = (secondDay-firstDay)/(1000*60*60*24);
    console.log(daysBetween);
    return daysBetween;
}

// It should return the number of days that lies between those dates

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// example input: [1, 2, 3, 4, 5, 6, 7], 2
// expected output: 25


function arrBottomTrim(arr, num) {
    var arrSum = 0;
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] > num) {
            arrSum = arrSum + arr[i];
        }
    }
    return arrSum;
}

var arr= [1, 2, 3, 4, 5, 6, 7]
var num= 2;

arrBottomTrim(arr, num);

