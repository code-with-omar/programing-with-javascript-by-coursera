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
const colors=["red","orange","yellow"];
for(const color of colors){
    console.log(color);
}