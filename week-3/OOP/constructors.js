// Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.
let date = new Date();
console.log(date);
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function () {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream;

//Example of constructor
// new Date();
// new Error();
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();