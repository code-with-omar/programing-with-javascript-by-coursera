//Array iterable
var veggies = ['onion', 'parsley', 'carrot'];
console.log(veggies[0]);
console.log(veggies[1]);
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

//Strings are iterable, too! 
let greeting = "Howdy";
console.log(greeting.length);
console.log(greeting[0]);
console.log(greeting[1]);
for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
//Strings !==arrays
var greet = "Hello ";
var user = "lisa";
console.log(greet.pop());// here error is strings are not array. So we cannot push() and pop()
console.log(greet + user);
console.log(greet.concat(user))