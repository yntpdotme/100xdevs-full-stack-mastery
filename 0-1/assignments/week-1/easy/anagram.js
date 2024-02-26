/*
  Question:
  Write a function isAnagram that takes two parameters and returns true/false if they are anagrams or not. An anagram is a word, phrase, or name formed by rearranging the letters of another.

  Description:
  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "spar" and "rasp".
  
  Function: isAnagram
  Description: Checks if two strings are anagrams.

  @param {string} str1 - The first string.
  @param {string} str2 - The second string.
  
  @returns {boolean} True if the strings are anagrams, false otherwise.
*/

function isAnagram(string1, string2) {
  // Check if the lengths of the strings are different, if yes, they can't be anagrams
  if (string1.length !== string2.length) {
    return false;
  } else {
    // Convert the strings to lowercase, split into arrays, sort, and join back into strings
    const sortedString1 = string1.toLowerCase().split('').sort().join('');
    const sortedString2 = string2.toLowerCase().split('').sort().join('');

    // Compare the sorted strings
    return sortedString1 === sortedString2;
  }
}

// Example usage
console.log(isAnagram('Spar', 'rasp'));

// Export the function for reuse in other modules
module.exports = isAnagram;
