<a href="./">
  <h1 align="center">Week - 1</h1>
</a>

<p align="center">
  Welcome to my Week One Assignments repository! Here, you'll find solutions to coding problems of varying difficulty levels, from easy to hard. Each problem is implemented in JavaScript and tested using Jest. 
</p>
<br>

<div align= "center">

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)&nbsp; [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

</div>
<br>

<p align="center">
  <a href="#1-easy"><strong>Easy</strong></a> ·
  <a href="#2-medium"><strong>Medium</strong></a> ·
  <a href="#3-hard"><strong>Hard</strong></a> ·
  <a href="#to-run-and-test-the-assignments"><strong>Local Setup</strong></a>
</p>
</br>

## Problem Statements

### 1. Easy

#### [Anagram](./easy/anagram.js)

Write a function `isAnagram` that takes two parameters and returns true/false if they are anagrams or not. An anagram is a word, phrase, or name formed by rearranging the letters of another.

#### [Expenditure Analysis](./easy/expenditure-analysis.js)

Implement a function `calculateTotalSpentByCategory` that takes a list of transactions as a parameter and returns a list of objects where each object is unique category-wise and has total price spent as its value.

#### [Find Largest Element](./easy/find-largest-number.js)

Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
<br></br><hr></br>

### 2. Medium

#### [Count Vowels](./medium/count-vowels.js)

Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string. Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

#### [Palindrome](./medium/palindrome.js)

Implement a function `isPalindrome` which takes a cleanStr as an argument and returns true/false as its result. The input `cleanStr` is case-insensitive.

#### [Times](./medium/times.js)

Write a function `calculateTime` that calculates the time (in seconds) it takes for the JS code to calculate the sum from 1 to n, given n as the input.
<br></br><hr></br>

### 3. Hard

#### [Calculator](./hard/calculator.js)

Implement a class `Calculator` with various methods for arithmetic operations and expression calculation. The calculator should handle multiple continuous spaces and invalid non-numerical characters.

#### [Todo List](./hard/todo-list.js)

Implement a class `Todo` with methods for adding, removing, updating, and retrieving todos. The class should also provide a method to clear all todos.
</br><br></br>

## Dependencies

- [Node](https://nodejs.org/): JavaScript runtime for server-side development.

- [Jest](https://jestjs.io/): JavaScript testing framework.
  </br></br><br>

## To Run and Test the Assignments

Ensure you have Node.js installed on your machine. Follow the steps below to install and run the assignments:

1. **Install nvm (Node Version Manager)**

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

2. **Install Node.js LTS version**

   ```bash
   nvm install --lts
   ```

3. **To run a specific assignment**

   ```bash
   cd assignments/week-1
   node /easy/fileName.js
   ```

4. **To test a specific assignment, run:**

   ```bash
   cd assignments/week-1
   npx jest ./tests/fileName.test.js
   ```

5. **To test all assignments, run:**
   `bash
cd assignments/week-1 
npx jest ./tests
`
   </br>

Feel free to explore each problem's solution and run the tests to verify their correctness.  
Happy coding!
