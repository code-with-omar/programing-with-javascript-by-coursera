//
const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]//concatenate by the spread operator
console.log(fruitsAndBerries);

//It's also easy to join objects: 
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar={...flying,...car};
console.log(flyingCar);

// Add new members to arrays without using the push() method
const veggies=["onion","parsley"];
veggies=[...veggies,"carrot","beetroot"];
console.log(veggies);