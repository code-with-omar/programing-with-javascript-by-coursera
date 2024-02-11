// /*Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.

// In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before they happen, so as to make your function less likely to cause errors because of faulty inputs.

// How would you then refactor the function given below with defensive programming in mind?*/
function letterFinder(word, match) {
    let condition1 = typeof (word) === 'string' && word.length >= 2
    let condition2 = typeof (match) === 'string' && match.length === 1;
    if (condition1 && condition2) {

        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}
letterFinder("omar", 'm');
