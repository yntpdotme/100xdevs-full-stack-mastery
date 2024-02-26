/*
  Question:
	Write a function calculateTime that calculates the time (in seconds) it takes for the JS code to calculate the sum from 1 to n, given n as the input.

	Description:
	Function: calculateTime
  Description: Calculates the sum of numbers from 1 to n and measures the time using the Date class.

  @param {number} n - The upper limit for the sum.
  @returns {number} The time taken in milliseconds. 
*/

function calculateTime(n) {
  // Measure start time.
  const startTime = Date.now();

  // Calculate sum from 1 to n.
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // Measure end time.
  const endTime = Date.now();

  // Calculate and return time taken.
  return endTime - startTime;
}

// Example usage
const timeTaken = calculateTime(1000000000);
console.log(`Time taken: ${timeTaken} milliseconds`);
