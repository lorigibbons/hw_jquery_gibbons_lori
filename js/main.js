$(document).ready(function () {
    //getting all p elements on page and assign to variable
    var paragraphs = $('p');
    //pass an object to the css jquery method altering style of paragraphs, 3 name/value pairs
    // var thisObject = {
    //     stuff to change in css
    // }
    $(paragraphs).css({
        'background-color': 'aqua',
        'font-size': '1.4rem',
        'color': 'blue',
    });
});
