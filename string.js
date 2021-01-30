//charAt(x)
var myString = 'jQuery FTW!!!';
console.log(myString.charAt(7));


//charAt(position)
var message1="jquery4u";
console.log(message1.charAt(1));

//concat
var message="Sam";
var final=message.concat(" is a"," good person.");
console.log(final);

//fromCharCode
console.log(String.fromCharCode(97,98,99,120,121,122));
console.log(String.fromCharCode(72,69,76,76,79));


//indexof
var sentence="Hi, my name is Sam!";
if (sentence.indexOf("Sam")!=-1);
console.log("Sam is in there!");


//lastIndexOf
var myString = 'javascript piyush';
console.log(myString.lastIndexOf('p'));


//match(regexp)
var intRegex = /[0-9 -()+]+$/;  

var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(isInt);

var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(isInt);

//replace
var myString = '999 JavaScript Coders';
console.log(myString.replace(/JavaScript/i, "jQuery"));

var myString = '999 JavaScript Coders';
console.log(myString.replace(new RegExp( "999", "gi" ), "The"));

//search
var intRegex = /[0-9 -()+]+$/;  

var myNumber = '999';
var isInt = myNumber.search(intRegex);
console.log(isInt);

var myString = '999 JS Coders';
var isInt = myString.search(intRegex);
console.log(isInt);

//slice
var text="excellent";
 console.log(text.slice(0,4));
 console.log(text.slice(2,4));


//split
var message="Welcome to jQuery4u";
var word=message.split("l");
console.log(message.split("l"));

//substring
var myString = 'javascript rana';
myString = myString.substring(0,10);
console.log(myString);

//toLowerCase()
var myString = 'JAVASCRIPT PIYUSH';
myString = myString.toLowerCase();
console.log(myString);

//toUpperCase()
var myString = 'javascript piyush';
myString = myString.toUpperCase();
console.log(myString);
