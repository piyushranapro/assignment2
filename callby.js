//callbyvalue

let original =10;
function updateOriginal(originalVal){
    originalVal +=10;
    console.log(originalVal);
}
updateOriginal(original);
console.log(original);


//callbyrefrence

let myObj={value:10}
function updateValue(objRef){
    objRef.value=20;
}
updateValue(myObj);
console.log(myObj.value);