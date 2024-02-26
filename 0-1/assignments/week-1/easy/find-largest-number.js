/*
  Question:
  Write a function findLargestElement that takes an array of numbers and returns the largest element.

  Description:
  Function: findLargestElement
  Description: Finds the largest element in an array of numbers.

  @param {Array<number>} numbers - An array of numbers.
  @returns {number|undefined} The largest element in the array, or undefined if the array is empty.
*/

function findLargestElement(array) {
  // Check if the array is empty, return undefined
  if (array.length === 0) {
    return undefined;
  }

  // Way-1: Sort the array ascendingly and get the first element
  let sortedLargest = array.sort((a, b) => b - a)[0];

  // Way-2: Use reduce to find the largest element
  let reducedLargest = array.reduce((largest, current) => {
    return largest < current ? current : largest;
  }, array[0]);

  // Way-3: Use Math.max with spread operator
  let maxLargest = Math.max(...array);

  // For this example, we will use Math.max() for its conciseness.
  return maxLargest;
}

// Example usage
console.log(findLargestElement([3, 7, 2, 9, 1])); // Output: 9
console.log(findLargestElement([])); // Output: undefined

// Export the function for reuse in other modules
module.exports = findLargestElement;
