/*
  Task: Write to a File

  Using the fs library, your assignment is to write contents to a file. 
  Treat the fs library as a black box, emphasizing understanding asynchronous tasks in the process. 
*/

const fsPromises = require('fs').promises;

const content = ` Write this in the file.`;

// Append the content to the file asynchronously.
fsPromises
  .writeFile('./easy/test.txt', content, {flag: 'a+'})
  .then(() => {
    console.log(`File written successfully`);

    // Read the contents of the file asynchronously.
    return fsPromises.readFile('./easy/test.txt', 'utf8');
  })
  .then(data => {
    // Print the contents of the file to the console.
    console.log('File Contents:', data);
  })
  .catch(err => {
    console.error(err);
  });

/* 
  TODO: 
  - While Running Locally ensure your working directory is /assignments/week-2/01-async-js 
  - Otherwise, you may encounter an error like <ENOENT: no such file or directory, open '/easy/test.txt'>.
*/
