function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum;
    // console.log(getNumber)

} else {
    getNumber = specificNum;
    // console.log(getNumber)
}

addTwoNums(getNumber(), getNumber())// try to understand later