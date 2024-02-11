//Using typeof
var test = typeof ("What is your name");
console.log(test);
test = typeof (10);
console.log(test);
test = typeof (3.14);
console.log(test);
test = typeof (true);
console.log(test);
test = typeof (1 < 2);
console.log(test);
test = typeof ([1, 2, 3]);
console.log(test);
test = typeof ({ firstProperty: 1 });
console.log(test);
test = typeof (function abc() {
    console.log("abc");
})
console.log(test);



