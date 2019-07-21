// Alright so we've discussed the way you can grab html elements, let's
// see how we can interact with them in Javascript!

// Type this into your console:

// Grab the Header with h1
var header = document.querySelector("h1")

// Then you can interface with the object.

// Interface with the style.
//You will see a ton of options show up!
header.style.color = 'red'

// Now let's connect it to the script to
// change it once every second to a random color!

// Random Color Function:

// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// Simple function for clarity
function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// Now perform the action over intervals (milliseocnds):
setInterval("changeHeaderColor()",1000);


// Let's type this into the console, follow along with the video lecture

var x = document.querySelector("p")

// Show Text
x.textContent

// Reassign Text
x.textContent = "new"

// Refresh the page
// Show actual HTML
x.innerHTML

// Edit HTML
x.innerHTML = "This is <strong>BOLD</strong>"

// Can't do that with just textContent

/////////////////
// Attributes //
///////////////

var special = document.querySelector("#special")
// var specialA = y.querySelector("a")

// specialA.getAttribute("href")
//
// specialA.setAttribute("href","https://www.amazon.com")


///////////////////
//Event listeners//
//////////////////
var headOne = document.querySelector('#one');
var headTwo = document.querySelector('#two');
var headThree = document.querySelector('#three');

headOne.addEventListener('mouseover', function() {
  headOne.textContent = 'Mouse currently over';
  headOne.style.color = 'red';
})

headOne.addEventListener('mouseout', function() {
  headOne.textContent = 'Hover over me';
  headOne.style.color = 'black';
})

headTwo.addEventListener('click', function() {
  headTwo.textContent = 'Clicked on';
  headTwo.style.color = 'blue';
})

headThree.addEventListener('dblclick', function() {
  headThree.textContent = 'I was clicked.';
  headThree.style.color = 'red';
})
