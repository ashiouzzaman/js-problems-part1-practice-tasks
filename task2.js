// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

let numbers = [5, 6, 11, 12, 98, 5, 7, 9, 5];
let find = 5;
let count = 0;

for (let num of numbers) {
	if (num === 5) {
		count++;
	}
}

console.log(count);
