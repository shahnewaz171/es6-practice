//===Arrow funtion[((=>) is a arrow function]===//
// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(5);
// console.log(result);

//Another
// const doubleIt = function myFun(num){
//     return num * 2;
// }



//===Using Arrow function===//
const doubleIt = num => num * 2;   //Using Arrow function[=>]
const add = (x, y) => x + y;  //Add multiple parameters using Arrow function(x, y)
const give5 = () => 5;      //We can use empty parameters but must be add default value;
const doMath = (x, y) => {  //Write Multi-lines using Arrow function
     const sum = x + y;
     const diff = x - y;
     const result =  sum * diff;
     return result;
};
const result2 = doubleIt(50, 70);
console.log(result2);

const result3 = add(50, 70);
console.log(result3);

const result4 = give5();
console.log(result4);
const result5 = doMath(7, 5);
console.log(result5);