// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// Function
function celToFar(celValue) {
	let farValue = (celValue * 1.8) + 32;
	return farValue;
}

// Function call
let tempInCel = 100
console.log("In Fahrenheit", celToFar(tempInCel));
