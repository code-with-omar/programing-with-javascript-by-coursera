// the focus is on three specific methods that exist on arrays
// 1.forEach 
// 2.filter
// 3.map
//Thats all Data Structures example
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
    console.log((`${index}. ${fruit}`));
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {//first perametre value, 2nd index
    console.log(`${index}. ${veggie}`);
});