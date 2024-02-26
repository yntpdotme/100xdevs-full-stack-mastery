<a href="./">
  <h1 align="center">Week - 2</h1>
</a>

<p align="center">
  Welcome to my Week Two Assignments repository! Here, you'll find solutions to coding problems of varying difficulty levels, from easy to hard. Each problem is implemented in JavaScript and tested using Jest. 
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
  <a href="#3-hard"><strong>NodeJs</strong></a> ·
  <a href="#to-run-and-test-the-assignments"><strong>Development Setup</strong></a>
</p>
</br>

## Problem Statements

### 1. Easy

#### [JavaScript Interval Counter](./01-async-js/easy/1-counter.js)

Create a JavaScript program that functions as a counter. The counter should increment at intervals of 1 second, continuously increasing as time progresses.

#### [Counter without setInterval](./01-async-js/easy/2-counter.js)

Create a JavaScript program to implement a counter that increments at intervals of 1 second. The challenge is to achieve this without using the common `setInterval` function.

#### [Reading File Contents](./01-async-js/easy/3-read-from-file.js)

Write code to read the contents of a [file](./01-async-js/easy/test.txt) and print it to the console using the `fs` library

#### [Write to a File](./01-async-js/easy/4-write-to-file.js)

Using the `fs` library write contents to a [file](./01-async-js/easy/test.txt).
<br></br><hr></br>

### 2. Medium

#### [File Cleaner](./01-async-js/medium/1-file-cleaner.js)

Create a program that reads a file, eliminates all extra spaces, and then writes the cleaned content back to the same file.

#### [Dynamic Clock](./01-async-js/medium/2-clock.js)

Construct a clock displaying the current machine time. Ensure it updates every second and presents the time in the following formats:

- HH:MM:SS (e.g., 13:45:23)
- HH:MM:SS AM/PM (e.g., 01:45:23 PM)

<br><hr><br>

### 3. Hard

#### [Promisify setTimeout](./01-async-js/hard/1-promisify-setTimeout.js)

Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

#### [Busy Waiting](./01-async-js/hard/2-sleep-completely.js)

Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.

#### [Concurrent Promise Execution](./01-async-js/hard/3-promise-all.js)

Write three different functions, `wait1`, `wait2`, and `wait3`, each returning a promise resolving after t1, t2, and t3 seconds, respectively.

Create a function, `calculateTime`, that utilizes these three functions to wait for all three promises to resolve using `Promise.all`.

Return a promise that provides the total time in milliseconds it takes to complete the entire operation.

#### [Sequential Promise Execution Time](./01-async-js/hard/4-promise-chain.js)

Write three functions, `wait1`, `wait2`, and `wait3`, that return promises resolving after t1, t2, and t3 seconds respectively.

Create a function, `calculateTime`, that sequentially calls all three functions in order.

Return a `promise chain` that calculates and returns the time in milliseconds it takes to complete the entire operation.

<br><hr><br>

### NodeJs

#### [Todo List Server](./02-nodejs/1-todoServer.js)

Create an Express HTTP server in Node.js to handle the logic of a todo list app.

#### [File Server](./02-nodejs/2-fileServer.js)

Create an Express HTTP server in Node.js that handles the logic of a file server using the built-in Node.js `fs` module
<br><br><br>

## Dependencies

- [Node](https://nodejs.org/): JavaScript runtime for server-side development.

- [Jest](https://jestjs.io/): JavaScript testing framework.

- [Zod](https://zod.dev/): Schema declaration and validation library.
  <br><br><br>

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
   # To run async-js assignments
   cd assignments/week-2/01-async-js
   node /easy/fileName.js

   # To run node-js assignments
   cd assignments/week-2/02-nodejs
   node /fileName.js
   ```

4. **To test a specific assignment, run:**

   ```bash
   cd assignments/week-2/01-async-js
   npx jest ./tests/fileName.test.js
   ```

5. **To test all assignments, run:**
   `bash
cd assignments/week-2/01-async-js
npx jest ./tests
`
   </br>

Feel free to explore each problem's solution and run the tests to verify their correctness.  
Happy coding!
