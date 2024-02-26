/* 
  Counter without setInterval:
  Create a JavaScript program to implement a counter that increments at intervals of 1 second. The challenge is to achieve this without using the common `setInterval` function.
*/

let count = 0;

// Function to update the counter and display it
const updateCounter = () => {
  process.stdout.write(`\r${++count}`); // Increment and display the counter

  // Schedule the next update using setTimeout
  setTimeout(updateCounter, 1000);
};

// Start the counter using setTimeout
updateCounter();
