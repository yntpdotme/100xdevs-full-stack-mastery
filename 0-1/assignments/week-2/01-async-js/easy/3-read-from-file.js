/*
  Task: Reading File Contents

  Objective:
  - Write code to read the contents of a file and print it to the console using the fs library as a black box. 
  - Understand asynchronous tasks.
  - Experiment with incorporating an expensive operation below the file read to observe its impact on the output. 
  - Gradually increase the complexity of the expensive operation to analyze its effects on the overall output.
*/

const fs = require('fs');

// Read the contents of the file asynchronously
fs.readFile('./easy/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Print the contents of the file to the console
  console.log('File Contents:', data);
});

/* 
  TODO: 
  - While Running Locally ensure your working directory is /assignments/week-2/01-async-js 
  - Otherwise, you may encounter an error like <ENOENT: no such file or directory, open '/easy/test.txt'>.
*/

// Simulate an expensive operation (e.g., a loop)
let sum = 0;
for (let index = 0; index < 1000000000; index++) {
  sum += index;
}
