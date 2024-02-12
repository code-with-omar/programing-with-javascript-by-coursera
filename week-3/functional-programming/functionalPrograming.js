// "There are actually several styles of coding, also known as paradigms. A common style is called functional programming, or FP for short.
// In functional programming, we use a lot of functions and variables

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);

// When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
// In functional programming, functions return new values and then use those values somewhere else in the code.
// function getDistance(mph, h) {
//     return mph * h
// }
// var mph = 60;
// var h = 2;
// var distance = getDistance(mph, h);

console.log(distance);