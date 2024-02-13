function defalutParameters(number) {
    console.log(number * number);
}
defalutParameters();//// Result: NaN

// Consider now, the following improvement, using default parameters:
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams(5);//25
withDefaultParams();//100