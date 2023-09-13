"use strict";
const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const butn = document.querySelector('button');
const numResult = [];
const striresult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
// console.log(add(1,6))
function printResult(resultObj) {
    console.log(resultObj.val);
}
// console.log(add('1','6'))
butn.addEventListener('click', () => {
    const num1 = n1.value;
    const num2 = n2.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const strresult = add(num1, num2);
    striresult.push(strresult);
    // console.log(result);
    // console.log(strresult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult, striresult);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 2000);
});
promise.then((data) => console.log(`the data is ${data}`));
