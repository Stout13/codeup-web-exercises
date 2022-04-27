// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

// var contents = $('#important').html();
// alert(contents);

// $('.codeup').css('border', '1px solid red');

// $('li').css('font-size', '20px');


// COMBINE SELECTORS
//VVVVVVVVVVVVVVV
// $('h1', 'p', 'li');

// var contents = $('h1').html();
// alert(contents);

// Remove your custom jQuery code from previous exercises.
//

// var ele = document.getElementsByTagName('h1');
// ele.addEventListener('click', function(e) {
//     alert('My element was clicked!');
// });
//
// function clickHandler() {
//     alert('My element was clicked!');
// }
// var ele = document.getElementByTagName('h1');
// ele.addEventListener('click', clickHandler);

// $('h1').click(clickHandler('click'))

$('h1').click(function() {
    $(this).css('background-color', 'red');
});
//
//


$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});

// var ele = document.getElementsById('h1-click');
// ele.addEventListener('click', function() {
//     alert('My element was clicked!');
// });

$('li').hover(function() {
    $(this).css('color', 'red');
},function() {
    $(this).css('color', 'black');
});

// var ele = document.getElementsByName('p');
// ele.addEventListener('none', function() {
//     alert('My element was clicked!');
// });


//     Add jQuery code that will change the background color of an h1 element when clicked.
//
//     Make all paragraphs have a font size of 18px when they are double clicked.
//
//     Set all li text color to red when the mouse is hovering; reset to black when it is not.



