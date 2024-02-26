/*
  Clock:
  Utilizing either `1-counter.js` or `2-counter.js` from the easy section, your task is to construct a clock displaying the current machine time. Ensure it updates every second and presents the time in the following formats:
    - HH:MM:SS (e.g., 13:45:23)
    - HH:MM:SS AM/PM (e.g., 01:45:23 PM)  
*/

/*
  We can Implementate clock in Multiple Ways:
  Choose the approach that best fits your requirements and coding preferences.

  1. Using custom updateClock() function:
    - Custom function for formatting time in both 12-hour and 24-hour formats.

  2. Using toLocaleTimeString():
    - Utilizes the toLocaleTimeString() method for convenient locale-based time formatting.

  3. Using Intl.DateTimeFormat():
    - Implements the Intl.DateTimeFormat API for fine-grained control over time formatting.

  Note: Each approach has its advantages; consider factors like simplicity, localization needs, and customization.

*/

/* ----- Way-1 Using updateClock() function ----- */
function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const time24hr = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  const time12hr = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${ampm}`;

  process.stdout.write(`\r${time24hr} | ${time12hr}`);
}

const way1 = () => {
  setInterval(updateClock, 1000);
};

/* ----- Way-2 Using toLocaleTimeString() ----- */
const way2 = () => {
  setInterval(() => {
    const currentTime = new Date();
    const time12hr = currentTime.toLocaleTimeString();
    const time24hr = currentTime.toLocaleTimeString('en-US', {
      hour12: false,
    });

    process.stdout.write(`\r${time24hr} | ${time12hr}`);
  }, 1000);
};

/* ----- Way-3 Using Intl.DateTimeFormat() ----- */
const way3 = () => {
  const timeFormatter1 = new Intl.DateTimeFormat('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  const timeFormatter2 = new Intl.DateTimeFormat('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  setInterval(() => {
    const currentTime = new Date();
    const time12hr = timeFormatter1.format(currentTime);
    const time24hr = timeFormatter2
      .formatToParts(currentTime)
      .map(({value}) => value)
      .join('');

    process.stdout.write(`\r${time24hr} | ${time12hr}`);
  }, 1000);
};

way1();
// way2();
// way3();
