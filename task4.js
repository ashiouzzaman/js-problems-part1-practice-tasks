// Task-4:

// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

let theString = "I am learning Programming to become a programmer"
const splittedString = theString.split(" ")
let longestCount = 0;
let longestWord = ''

// Finding longest word
for (str of splittedString){
    if(longestCount<str.length){
        longestCount = str.length
        longestWord = str
    }
}

// Printing longest word
console.log(longestWord)