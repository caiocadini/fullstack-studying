//Checking that jQuery was loaded
/* $(document).ready(function(){
    do something;
}) */

//querySelector === $ (same as querySelectorAll)
$("h1").css("color", "red");

//Obtaining css properties
console.log($("h1").css("font-size"));

//Adding classes to HTML elements (used to avoid defininf styles solely on js)
//We can add more than one class, just by putting space between each class name to be added 
$("h1").addClass("bigText");

//Removing classes of HTML element
$("h1").removeClass("bigText");

//Confirming that element has class
console.log($("h1").hasClass("bigText"))

//Changing element text
$("button").text("new Text")

//Adding HTML
$("button").html("<em>Hello</em>")

//HTML attribute manipulation(
console.log($("a").attr("href", "https://www.bing.com"))

//Adding event listener
$("h1").click(function() {
    $("h1").text("bye");
});


$(document).keydown(function(e) {
    $("h1").text(e.key);
}); 

//Adding event listener using on() method
$("h1").on("click", function() {
    $("h1").css("color", "grey");
});

//Adding HTML elements
$("h1").before("<button>New</button>");
$("h1").after("<button>after</button>");
//prepend adds the element before inside de h1 tag but before the text
$("h1").prepend("<button>prepend text</button>");
//append does the same as prepend but after the text
$("h1").append("<button>append button</button>");

//remove elements
$("a").remove();

//Adding animations to elements
/* $("button").click(function() {
    $("h1").slideToggle();
}); */

//Custom animations (We alter only the elements that we can change its numeric value)
/* $("button").click(function() {
    $("h1").animate({opacity: 0.5});
}); */

//Chaining animations
 $("button").click(function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

//Documentation: https://api.jquery.com/
