//iterator array of number
const numbers = [1, 3, 4];

for (const item of numbers) {
  console.log(item);
}


//using iterator.next() function
const numbers1 = [1, 3, 4];

const iterator = numbers1[Symbol.iterator]();

iterator.next(); 
iterator.next(); 
iterator.next(); 
iterator.next(); 



//iterable string
const message = 'Hi!';

for (const char of message) {
  console.log(char);}




//iterable map
  const map = new Map();
map.set('name', 'Eric');
map.set('address', 'South Park');

for (const [key, value] of map) {
  console.log(key, value);}




//iterable set
  const set = new Set(['blue', 'red', 'green']);

for (const item of set) {
  console.log(item);
}



 // Arrays are a built in Iterable object
var iterable = ['a', 'b', 'c'];

var iterator1 = iterable[Symbol.iterator]();
var iteratorIterator = iterator[Symbol.iterator]();

console.log(iterator1 === iteratorIterator);
console.log();

for (var x of iterable) {
  console.log(x);
}
console.log();

// Since Iterators are also Iterables, you can use for-of loops with them.
for (var x of iterator1) {
  console.log(x);
}
