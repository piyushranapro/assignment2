var x = 5; // global

function someThing(y) {
  var z = x + y;
  console.log(z);
}

function someThing(y) {
  x = 5; // still global!
  var z = x + y;
  console.log(z);
}


function someThing(y) {
  var x = 5; // local
  var z = x + y;
  console.log(z);
}