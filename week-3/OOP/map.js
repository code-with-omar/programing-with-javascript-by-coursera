//Thats all Data Structures example
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr)
const numbers1 = [65, 44, 12, 4];
const newArr1 = numbers1.map(myFunction)

function myFunction(num) {
    return num * 10;
}
console.log(newArr1)