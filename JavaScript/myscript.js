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
