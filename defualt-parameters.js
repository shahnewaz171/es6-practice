function add(num1, num2){
    return num1 + num2;
}
const total = add(15, 20);
console.log(total);


//Another [Given two parameters but assign one value calculation]
function add(num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total1 = add(15);
console.log(total1);


//Another
function add(num1, num2){
    num2 = num2 || 20; //add default value
    return num1 + num2;
}
const total2 = add(15);
console.log(total2);

//Another
function add(num1, num2 = 20){
    return num1 + num2;
}
const total3 = add(15);
console.log(total3);

//Last way
function add(num1, num2 = 20){ //add default value
    return num1 + num2;
}
const total4 = add(15, 1);
console.log(total4);