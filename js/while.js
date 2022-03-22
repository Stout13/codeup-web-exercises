function powerHour() {
    for(i=2; i<65000; i*=2) {
        console.log(i);
    }
}

powerHour()




var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones + " = allCones");
do {

    do{
        var buyCones = prompt("How many?!");
    } while(buyCones < 0 || buyCones > 100)
    var buyCones = prompt("How many?!");
    alert("sorry I only have " + allCones + "left.");
    allCones = allCones - buyCones
    console.log("welp, dollar saved dollar earned...  we have" + allCones + " cones")
    allCones = allCones - buyCones;
    console.log("Sold " + buyCones + " cones");
}
while (allCones > 0) ;




















// function iceCream() {
//     // This is how you get a random number between 50 and 100
//     var allCones = Math.floor(Math.random() * 50) + 50;
//     console.log(allCones + " = allCones")
//     do {
//         var buyCones = prompt("How many?!")
//         } if ((allCones - buyCones) < 0) {
//             alert("sorry I only have " + allCones + "left.");
//         } else {
//             allCones = allCones - buyCones
//             console.log("welp, dollar saved dollar earned...  we have" + allCones + " cones")
//         }
//             if ((allCones - buyCones) > 0) {
//                 allCones = allCones - buyCones;
//                 console.log("Sold " + buyCones + " cones");
//
//         }
//     while (allCones > 0) ;
// }
//
// iceCream();


// This expression will generate a random number between 1 and 5


