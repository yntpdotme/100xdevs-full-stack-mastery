/*
  Question:
	Implement a function countVowels that takes a string as an argument and returns the number of vowels in the string. Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

	Description:
	Function: countVowels
  Description: Counts the number of vowels in a string, considering both uppercase and lowercase vowels.

	@param {inputString} str - The string to be analyzed.
	@returns {number} The number of vowels in the string.
*/

function countVowels(inputString) {
  // Check if the string is empty, return 0
  if (inputString.length === 0) {
    return 0;
  }

  // Initialize the count of vowels
  let count = 0;

  // Loop through each character in the string
  inputString
    .toLowerCase()
    .split('')
    .forEach(char => {
      // Check if the character is a vowel
      if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        count++;
      }
    });

  return count;

  /* 
    Alternative Approach (Oneliner):
    return (inputString.match(/[aeiou]/ig) || []).length;
      -- It matches against the regex (g makes it search the whole string, i makes it case-insensitive) and returns the number of matches. We check for null in case there are no matches (i.e., no vowels), and return 0 in that case.
  */
}

// Example usage
console.log(countVowels('aafdidfdf')); // Output: 2

// Export the function for reuse in other modules
module.exports = countVowels;
