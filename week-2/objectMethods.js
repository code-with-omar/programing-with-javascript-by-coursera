// You might already be familiar with objects in JavaScript.

// In this video, you will learn how to design objects as combinations of data and functionality.

// As you might already know, an object consists of key-value pairs, known as properties.

// We can add new key-value pairs to existing objects using the dot notation and the assignment operator. 
var car = {};
car.color = "red";
car.mileage = 98765;
car.color = "red";
console.log(car);
//update the value of a property of the car objject;
// These are known as properties, and can take many data types, including functions.

//here include a function and function name is turnKey
car.turnKey = function () {
    console.log('engine running');
}
car.lightsOn = function() {
    console.log("The lights are on.")
}

console.log(car);
car.turnKey()//called the turnKey function in car object
car.lightsOn()//called the turnKey function in car object