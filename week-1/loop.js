/*Task 1
Write a "for" loop that will perform exactly the same repetitive code as this:*
1
2
3
4
5
Counting completed!

*/
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Counting completed!");
//task 2
// Write a "for" loop that will perform exactly the same repetitive code as this:
/*
5
4
3
2
1
Countdown finished!
*/

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Countdown finished!");
/**
 * 
Task 3
Write a "while" loop that will perform exactly the same repetitive code as this:
1
2
3
4
5
Counting completed!
 */
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log("Counting completed!");
/**
Task 4
Write a "while" loop that will perform exactly the same repetitive code as this:
5
4
3
2
1
Countdown finished!
 */
let j = 5;
while (j > 0) {
    console.log(j);
    j--;
}
console.log("Countdown finished!");

/**
Task 5
Write a "while" loop that will perform exactly the same repetitive code as this
2018
2019
2020
2021
2022
 */
let k = 2018;
while (k <= 2022) {
    console.log(k);
    k++;
}
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var p = 0; p < 7; p++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[p], styles)
}