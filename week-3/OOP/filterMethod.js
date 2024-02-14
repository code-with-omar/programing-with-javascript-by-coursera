//The filter() method
const nums = [0, 10, 20, 30, 40, 50];
const newNumber = nums.filter((num) => num > 10);
console.log(newNumber);
const newNumber2 = newNumber.filter(function (num) {
    return num > 20;
})
console.log(newNumber2);
