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