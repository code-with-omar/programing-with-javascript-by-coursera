// try to understand (for of) in js 
const cars = {
    speed: 100,
    color: "blue"
}
//here we find error is Uncaught TypeError: cars is not iterable thats means we cannot apply for of in object
// for (let car of cars) {
//     console.log(car);
// }

//ntrary to objects, arrays are iterable. For example:  
// thats means for of apply in array and array of object
const colors = ["red", "orange", "yellow"];
for (const color of colors) {
    console.log(color);
}
// Built-in methods with Object.key()
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); //array of object return and print out the key 
// The Object.values() method
const car3 = {
    speed: 200,
    color: "magenta"
}
console.log(Object.values(car3));// print the values of keys
console.log(Object.entries(car3));//print the key and values

//now have all the ingredients that you need to loop over any object's own property keys and values
let clothingItem = {
    price: 50,
    color: "beige",
    material: "cotton",
    season: "autumn"
}
for(const key of Object.keys(clothingItem)){
    console.log(clothingItem[key]);
}