alert('Welcome to your bank!');
// create a variable
var deposit = prompt('How much would you like to deposit today?')
alert("You've deposited: " + deposit);
// print a message in console log
console.log('You are a cool person.');


 // Comparison operators

 // check the value, use == (type coerced)
alert(" '2' == 2:" + ('2' == 2));

// check both type and value, use ===
alert(" '2' === 2: " + ('2' === 2));

//similar for inequality
alert(" '5' != 5: " + ('5' != 5));
alert(" '5' !== 5: " + ('5' !== 5));


// logical operators, && (and), || (or), ! (not)


// for loop
// for - loops through a number of times
// for/in - loops through a JS object
// for/of - loops an array
// for (statement1;statement2;statement3) {
//   execute code
// }
for (var i = 0; i < 5; i++) {
  console.log('Number is ' + i);
}

var word = 'ABCDEFGHIJKLMN'
for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}

var arr = 'ABCDEFDSGSDG'
for (letter of arr) {
  console.log(letter);
}

// Functions
// function name(parameter1, parameter2) {
//   code to execute
// }
function hello(name) {
  console.log('hello ' + name);
  var results = name + name;
  return results
}

results = hello('Qianqian')
console.log(results)

// Arrays
var countries = ['USA', 'Germany', 'China']
var matrix = [[1, 2], [3, 4]]
// access elements in array
countries[0]

// reassignment
countries[1] = 'Brazil'

//loop
function addAwesome(name) {
  console.log(name + ' is awesome.')
}
countries.forEach(addAwesome)

// mixed data types
var mixed = [true, 20, 'string']

// add/remove elements
var myArr = ['one', 'two', 'three']

var lastItem = myArr.pop()

myArr.push('four')

// Objects are hash tables
var carInfo = {make:'Toyota', year:1990, model:'Camry'}
// note: use string 'make'
carInfo['make']

// show the entire Objects
console.dir(carInfo)

// iterate through an object with for/in
for (key in carInfo) {
  console.log(key)
  console.log(carInfo[key])
}

//object methods (functions inside object)
var simple = {
  prop:'Qianqian',
  myMethod:function() {
    // use this to call method from object itself
    console.log('The myMethod was called with prop =' + this.prop)
  }
}

// call myMethod function
simple.myMethod()
