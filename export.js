// index.js
function func() {
    return "this a default export."
 }
 export default func;
 // test.js
 import myDefaultExport from "./index.js";
 console.log(myDefaultExport());


 