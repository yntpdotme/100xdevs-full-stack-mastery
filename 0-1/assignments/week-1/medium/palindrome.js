/*
  Question:
	Implement a function isPalindrome which takes a cleanStr as an argument and returns true/false as its result. The input cleanStr is case-insensitive.

	Description:
	Function: isPalindrome
  Description: Checks if a string is a palindrome, considering case-insensitivity and ignoring non-alphanumeric characters.

	@param {inputString} str - The string to be analyzed.
	@returns {boolean} True if the string is a palindrome, false otherwise.
*/

function isPalindrome(inputString) {
  // Check if the inputString is empty
  if (inputString.trim() === '') {
    return true;
  }

  // Clean the input string by converting to lowercase and removing non-alphanumeric characters
  let cleanedString = inputString.toLowerCase().replace(/[\W_]/g, '');

  // Check if the cleaned string is a palindrome using a loop
  for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
    if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
      return false;
    }
  }

  return true;

  /* 
    Way-2:
    return cleanedString === [...cleanedString].reverse().join(""); 
      -- This method creates an array from the cleaned string, reverses it, and joins it back into a string. Then, it compares it with the original cleaned string.
  */
}

// Example usage
console.log(isPalindrome('Able, was I ere I saw Elba!')); // true
console.log(isPalindrome("Madam, I'm Adam")); // true
console.log(isPalindrome('Hello, world!')); // false

module.exports = isPalindrome;
