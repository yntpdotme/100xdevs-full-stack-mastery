/*
  JavaScript Interval Counter:
  Create a JavaScript program that functions as a counter. The counter should increment at intervals of 1 second, continuously increasing as time progresses.
*/

const startCounter = () => {
  let count = 0;

  // Set interval for recurring increments
  const counterInterval = setInterval(
    () => process.stdout.write(`\r${count++}`),
    1000,
  );

  // Optional: Add cleanup logic (clearInterval) if needed
  // const durationInSeconds = 10;
  // setTimeout(() => clearInterval(counterInterval), durationInSeconds * 1000);
};

// Start the counter
startCounter();
