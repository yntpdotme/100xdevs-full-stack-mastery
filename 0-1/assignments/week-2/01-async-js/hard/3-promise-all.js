/*
  Task: Concurrent Promise Execution Time

  Objective:
  - Write three different functions, wait1, wait2, and wait3, each returning a promise resolving after t1, t2, and t3 seconds, respectively.
  - Create a function, calculateTime, that utilizes these three functions to wait for all three promises to resolve using Promise.all.
  - Return a promise that provides the total time in milliseconds it takes to complete the entire operation.
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
  const start = Date.now();
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(
    () => Date.now() - start,
  );
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
