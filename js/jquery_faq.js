"use strict";
alert("You reached your JS File");
$(".big-title").dblclick(function () {
    $(this).html("Sabretooth Automotive");
});

// let holdThis = $('main').html();
//
// console.log(holdThis);
//
// $('main')
//     .html('<img src="img/glitter.jpg" alt="cool disney villain Ratcliffe"><h1>SEE HOW HE GLITTER!</h1>')
//     .prepend('<img src="img/ratcliffe.jpg" alt="cool disney villain Ratcliffe">')
//     .prepend('<img src="img/ratcliffe_again.jpg" alt="cool disney villain Ratcliffe">')
//     .prepend('<h1>The pug image is too big, halp!</h1>')
//     .append('<img src="img/pug.jpg" alt="a good doggie" style="display: inline-block">')
//     .append(holdThis);


$('<button/>')
    .text('Test')
    .click(function () { alert('hi'); });
$('<button>Test</button>').click(function () { alert('hi'); });

$("main").prepend('<h1>The pug image is too big, halp!</h1><img src="../img/gamer1.jpg" alt="cool disney villain Ratcliffe"><img src="img/ratcliffe.jpg" alt="cool disney villain Ratcliffe"><img src="img/glitter.jpg" alt="cool disney villain Ratcliffe"><h1>SEE HOW HE GLITTER!</h1><img src="img/pug.jpg" alt="a good doggie" style="display: inline-block">');

$("h1").click(function() {
    if ($('body').hasClass("dark-mode")) {
        $(this).css({
            "color": "#FE6700",
            "text-decoration": "underline"
        })
    } else {
        $(this).css({
            "color": "#373fff",
            "text-decoration": "underline"
        })
    }
});

$("p").addClass('cool-stuff');

$(".cool-stuff").click(function() {
    $(this).removeClass('cool-stuff');
});

$(document).keypress(function(e) {
    console.log(e);
    if (e.key === "f") {
        $('body').toggleClass("dark-mode");
    }
});

$("#btn-1").click(function() {
    $("h3").toggleClass("invisible");
});


