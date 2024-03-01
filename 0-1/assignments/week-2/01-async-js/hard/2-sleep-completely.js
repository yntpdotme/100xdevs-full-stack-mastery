/*
  Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
  During this time, the thread should not be able to do anything else.
  The function should return a promise just like before.
*/

const sleep = milliseconds => {
  // Create a new Promise that resolves after the specified milliseconds using setTimeout
  return new Promise(resolve => {
    setTimeout(() => resolve(), milliseconds);
  });
};

// Example usage
let n = 3000;
sleep(n)
  .then(() => {
    // Log a message when the promise is resolved
    console.log(`Function sleeps for ${n/1000} seconds`);
  })
  .catch(error => {
    // Log an error message if the promise is rejected
    console.error(`An error occurred during sleep`);
  });

// Export the sleep function for external use
module.exports = sleep;
