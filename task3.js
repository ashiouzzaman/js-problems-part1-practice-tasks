// Task-3:
// Write a function to count the number of vowels in a string.
let vowels = ['a', 'e', 'i', 'o', 'u']
let theStringIs = 'Hello Ashiouzzaman'
let count = 0;

for (let str of theStringIs.toLocaleLowerCase()){
    if(vowels.includes(str)){
        count++;
    }
}

console.log("Number of vowels in", theStringIs, "is ", count)