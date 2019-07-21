// This is the code we typed into the console

// Try just the dollar sign:
$

// Grab the h1 header:
$('h1');

// Save it to variable:
var x = $('h1');

// You can easily edit the css properties:
x.css("color",'red');
x.css("background","blue");

// Multiple CSS properties at once:
var newCSS = {
  "color":"white",
  "background":"blue",
  "border":"red"
}

x.css(newCSS);

// Grabbing multiple returns an array-like object:
var listItems = $('li');

// Change all items:
listItems.css("color",'red');

// Grab a particular index item:
listItems.eq(0).css('color','blue');

listItems.eq(1).css('color','purple');

// LastItem
listItems.eq(-1).css('background','red');

///////////////////////
/// TEXT and HTML ////
/////////////////////

// Grabbing Text:
$('h1').text()

// Changing Text:
$('h1').text("Brand New Text!")

// Grabbing HTML
$('h1').html()

// Changing HTML
$('h1').html("<em>Now in Italics</em>")

////////////////////////////
// ATTRIBUTES and VALUES //
//////////////////////////

// Changing an attribute
$("input").eq(1).attr('type','checkbox');

// Changing values
$("input").eq(0).attr('value',"BRAND NEW VALUE");

// Can do this more directly:
$("input").eq(0).val("cleared up");


/////////////////
// CLASSES /////
///////////////

// Add a Class
$('h2').addClass("turnRed")

// Remove a Class
$("h2").removeClass("turnRed");

// Toggle the Class on and Off
$("h3").addClass("turnBlue");

$("h3").toggleClass("turnBlue");


// jQuery makes it easy to interact with the DOM!

// List of all possible events!
// https://api.jquery.com/category/events/

//////////////
// CLICKS ///
////////////

// On Click
$('h1').click(function(){
  console.log("There was a click!");
})

// Click on multiple elements
$('li').click(function() {
  console.log("Click on any li !");
})

// Using This with jQuery
$('h3').click(function() {
  $(this).text("I was changed!");
})

/////////////////
// KEYPRESS ////
///////////////
// Using This with jQuery
// turn h3 into red when there is keyboard interaction in the first input tag
$('input').eq(0).keypress(function() {
  $('h3').toggleClass("turnRed");
})

// We can use this event object, that has a ton of information!
$('input').eq(0).keypress(function(event) {
  console.log(event);
})

// Each Keyboard Key has a Keycode, for example Enter is 13
$('input').eq(0).keypress(function(event) {
  // 13 is the enter key
  if(event.which === 13){
    $('h3').toggleClass("turnRed");
  }
})

//////////////////
// ON() method///
////////////////

// on() basically works like addEventListener()
$('h1').on("dblclick",function() {
  $('h1').addClass('turnBlue');
})


// turn red when mouse hovers li
$('li').on('mouseenter',function() {
  $(this).toggleClass('turnRed');
})

/////////////////////////////
// EFFECTS and ANIMATIONS //
///////////////////////////

// http://api.jquery.com/category/effects/
$('input').eq(1).val("FADE OUT EVERYTHING");

$('input').eq(1).on("click",function(){
  // grab everything in container class and fade out
  // 3000 is the miliseconds to fade out
  $(".container").fadeOut(3000) ;
})


$('input').eq(1).on("click",function(){
  $(".container").slideUp(1000) ;
})
