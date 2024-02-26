## Development Setup

1. If you have Node.js locally, you should run these on your machine

2. If you don't, you can copy these over to repl.it and run it there.
   <br><br>

## How to Run Tests

1. Your working directory must be `/assignments/week-2/01-async-js`

2. Do `npm install`

3. To run tests run

   ```bash
   npx jest ./tests/<filename-of-test>

   # For Example
   npx jest ./tests/1-promisify-setTimeout.test.js
   ```

4. If the above does not work for you,

   ```bash
   npm run <name-of-test>

   # For Example
   npm run 1-promisify-setTimeout
   ```

5. To run all tests run

   ```bash
   npx jest ./tests/

   # or
   npm run all
   ```
