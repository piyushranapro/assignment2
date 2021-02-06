function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));


  //1. Copying an array

let fruits = ['Apple','Orange','Banana'];

let newFruitArray = [...fruits];

console.log(newFruitArray); // ['Apple','Orange','Banana']

//2. Concatenating arrays

let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

//3. Spreading elements together with an individual element

let fruits1 = ['Apple','Orange','Banana'];

let newFruits = ['Cherry', ...fruits1];

console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana']

//4. Spreading elements on function calls

let fruits2 = ['Apple','Orange','Banana'];

var getFruits = (f1, f2, f3) => {
console.log(fruits2); };

getFruits(...fruits2); // Fruits: Apple, Orange and Banana

//5. Spread syntax for object literals

var obj1 = { id: 101, name: 'Jhon Doe' };

var obj2 = { age: 25, country: 'USA'};

const employee = { ...obj1, ...obj2 };

console.log(employee);