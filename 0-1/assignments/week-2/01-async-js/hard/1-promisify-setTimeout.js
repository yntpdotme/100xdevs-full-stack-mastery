/*
  Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const wait = n => {
  // Create a new Promise that resolves after n seconds using setTimeout
  return new Promise(resolve => {
    // Set a timeout to resolve the promise after n seconds
    setTimeout(() => resolve(), n * 1000);
  });
};

// Example usage
let n = 2;
wait(n)
  .then(() => {
    // Log a message when the promise is resolved
    console.log(`Promise resolved after ${n} seconds`);
  })
  .catch(error => {
    // Log an error message if the promise is rejected
    console.error(`Promise rejected after ${n} seconds`);
  });

// Export the wait function for external use
module.exports = wait;
