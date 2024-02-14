// To capture user input, you can use the built-in prompt() method, like this:
const answer = prompt('What is your name?');
if (typeof (answer) === 'string') {
    let h1 = document.createElement("h1") 
    h1.innerText = answer;
    document.body.innerText = "";
    document.body.appendChild(h1);
}
