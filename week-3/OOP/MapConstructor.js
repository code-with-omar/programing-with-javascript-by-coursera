//Thats all Data Structures example
// To make a new Map, you can use the Map constructor:
// new Map();
// A map can feel very similar to an object in JS.
// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion")
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
console.log(bestBoxers);

// To get a specific value, you need to use the get() method. For example:  
console.log(bestBoxers.get(1));