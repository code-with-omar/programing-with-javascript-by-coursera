try {
    console.log(a + b);
} catch (error) {
    console.log("There was an error");
    console.log("The error was saved in the error log");
    console.log(error);
}
console.log("There was an error but my program does not stop");

try{

    throw new ReferenceError();
}catch(error){
    console.log(error)
}
console.log("There was an error but my program does not stop");