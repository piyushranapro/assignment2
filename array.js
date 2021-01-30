var numberArray = [1,2,3,4,5,6,7,8,9,10];
//for Version
var squareNumbers = [];
for (var counter=0; counter < numberArray.length; counter++){
   squareNumbers.push(numberArray[counter] * numberArray[counter])
}
console.log(squareNumbers);
//forEach Version
var squareNumbers1 = [];
numberArray.forEach(number => {
    squareNumbers1.push(number*number);
})
console.log(squareNumbers1);

//Map version
var squareNumbers2 = numberArray.map(number => number*number);
console.log(squareNumbers2);

//Map object string
var persons = [
    {id : 1, name : "abc", tags : "javascript"}, 
    {id : 2, name : "def", tags : "javascript"}, 
    {id : 3, name : "ghi", tags : "java"},
    {id : 4, name : "jkl", tags : "javascript"},
    {id : 5, name : "mno", tags : "java"}
  ];
  var nameArray = persons.map(personObj => personObj.name);
  console.log(nameArray);

  //some
  
  var numberArray = [1,2,3,4,5,6,7,8,9,10];
  var hasFive2 = numberArray.some(number => number === 5);
  console.log(hasFive2);
  var hasEleven = numberArray.some(number => number === 11);
  console.log(hasEleven); 

  //filter

  var numberArray = [1,2,3,4,5,6,7,8,9,10];
var evenNumberFilterFn = (number => number%2===0);
var squareMapFn = (number => number*number);
var sumFn = ((sum, number) => sum + number);
var sumOfSquareOfEvenNumbers = numberArray
                              .filter(evenNumberFilterFn)
                              .map(squareMapFn)
                              .reduce(sumFn,0);
console.log(sumOfSquareOfEvenNumbers);

//reduce

var numberArray = [1,2,3,4,5,6,7,8,9,10];
var sum2 = numberArray.reduce(((acc, num) => acc + num), 0);
console.log(sum2);

//length
let colors = ['red', 'green', 'blue'];
console.log(colors.length);

const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 2;
console.log(fruits);

//every
let result = [10, 5, 20, 100].every(function(number){
    return number < 150
});
console.log(result);

//sort
let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];
animals.sort();

console.log(animals);

//splice
let numbers = [1, 2, 3];
console.log(numbers.splice(1, 2)); 
console.log(numbers);

//join
console.log([1, 2, 3].join(' '));

//push
let number1 = [1, 2, 3];
console.log(number1.push(4)); 
console.log(number1);