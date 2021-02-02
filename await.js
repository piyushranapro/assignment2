//async 
async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f(); 

//await promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

async function asyncFunc() {


    let result = await promise; 

    console.log(result);
    console.log('hello');
}
asyncFunc();