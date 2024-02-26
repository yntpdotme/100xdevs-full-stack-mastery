<a href="./">
  <h1 align="center">Week - 3</h1>
</a>

<p align="center">
  Welcome to my Week There Assignments repository! Here, you'll find solutions to coding problems. Each problem is implemented in JavaScript and tested using Jest. 
</p>
<br>

<div align= "center">

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)&nbsp; [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

</div>
<br>

<p align="center">
  <a href="#middlewares"><strong>Middlewares</strong></a> ·
  <a href="#jwt-fundamentals"><strong>JWT</strong></a> ·
  <a href="#working-with-mongodb"><strong>MongoDB</strong></a> ·
  <a href="#authentication"><strong>MongoDB & JWT</strong></a> ·
  <a href="#to-run-and-test-the-assignments"><strong>Development Setup</strong></a>
</p>
</br>

## Problem Statements

### Middlewares

#### [Request Counter](./01-middlewares/1-request-count.js)

You have been provided with an Express server containing several endpoints.

Your task is to implement a global middleware using `app.use` that maintains a count of the total number of requests made to the server. The count should be stored in the global variable `requestCount`.

#### [Rate Limitter](./01-middlewares/2-rate-limitter.js)

You have been given an express server with various endpoints. Your task is to implement a global middleware (`app.use`) that enforces rate limiting for user requests.
The rate limit should be set to a maximum of 5 requests per second. If a user exceeds this limit, the server should respond with a 404 error.
Flow:

- Users will include their user ID in the header as 'user-id'.
- The server should track the number of requests from each user and block further requests if the limit is exceeded.
- The count for each user resets every second.

#### [Error Count](./01-middlewares/3-error-count.js)

You have been given an express server with various endpoints.

Your tasks are:

1. Ensure that if there is ever an exception in any endpoint, the end user sees a status code of 404.
2. Maintain the errorCount variable, which should increment every time there is an exception in any endpoint.

</br><hr></br>

### JWT Fundamentals

#### [Implement JWT](./02-jwt/index.js)

Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here.

Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise.

Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherwise.

<br><hr><br>

### Working With MongoDB

#### [Course Selling Website](./03-mongo/README.md)

Implement a course selling web application with two user types: Admins and Users.

Admins can sign up and create courses, while Users can sign up, view courses, and purchase them.

Think of this application as a simplified version of platforms like Udemy.

<br><hr><br>

### Authentication

#### [Course Selling Website with Auth](./04-mongo-with-jwt-auth/README.md)

Build a course selling web application with enhanced security using JSON Web Tokens (JWT) for authentication.
<br><br><br>

## Dependencies

- [Node](https://nodejs.org/): JavaScript runtime for server-side development.

- [Jest](https://jestjs.io/): JavaScript testing framework.

- [Zod](https://zod.dev/): Schema declaration and validation library.

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register): Cloud database service.
  <br><br><br>

## To Run and Test the Assignments

Ensure you have Node.js installed on your machine. Follow the steps below to install and run the assignments:

1. **Install nvm (Node Version Manager)**

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

2. **Install Node.js LTS version**

   ```bash
   nvm install --lts
   ```

3. **To run a specific assignment**

   ```bash
   # To run middlewares assignments
   cd assignments/week-3/01-middlewares
   node /fileName.js

   # To run jwt assignments
   cd assignments/week-3/02-jwt
   node /index.js

   # To run mongodb assignments
   cd assignments/week-3/03-mongo
   npm i
   node /index.js

   # To run mongodb with jwt auth assignments
   cd assignments/week-3/04-mongo-with-jwt-auth
   npm i
   node /index.js
   ```

4. **To test a specific assignment, run:**

   ```bash
   cd assignments/week-3/01-middlewares
   npx jest ./tests/fileName.spec.js
   ```

5. **To test all assignments, run:**
   `bash
cd assignments/week-3/01-middlewares 
npx jest ./tests
`
   </br>

Feel free to explore each problem's solution and run the tests to verify their correctness.  
Happy coding!
