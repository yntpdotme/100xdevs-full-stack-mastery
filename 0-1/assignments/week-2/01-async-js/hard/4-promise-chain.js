/*
  Task: Sequential Promise Execution Time

  Objective:
  - Write three functions, wait1, wait2, and wait3, that return promises resolving after t1, t2, and t3 seconds respectively.
  - Create a function, calculateTime, that sequentially calls all three functions in order.
  - Return a promise chain that calculates and returns the time in milliseconds it takes to complete the entire operation.
  - Optionally, compare the results with those from 3-promise-all.js.
*/

// Function that returns a promise resolving after t seconds
const wait1 = t => {
  return new Promise(resolve => {
    setTimeout(() => resolve(t), t * 1000);
  });
};

// Function that returns a promise resolving after t seconds
const wait2 = t => {
  return new Promise(resolve => {
    setTimeout(() => resolve(t), t * 1000);
  });
};

// Function that returns a promise resolving after t seconds
const wait3 = t => {
  return new Promise(resolve => {
    setTimeout(() => resolve(t), t * 1000);
  });
};

const calculateTime = (t1, t2, t3) => {
  // Record the start time using Date.now()
  const start = Date.now();

  // Sequentially chain promises using .then()
  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => Date.now() - start); // Calculate the total time taken.
};

// Example usage
calculateTime(1, 2, 3)
  .then(totalTime => {
    // Log or use the total time as needed
    console.log(`Total time taken: ${totalTime} milliseconds`);
  })
  // Handle any potential errors in the catch block
  .catch(error => {
    console.error(`An error occurred: ${error}`);
  });

// Export the function for external use
module.exports = calculateTime;
