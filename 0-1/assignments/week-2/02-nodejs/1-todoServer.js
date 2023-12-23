/*
  You need to create an Express HTTP server in Node.js to handle the logic of a todo list app. The server should adhere to the following specifications:

  1. GET /todos
    - Description: Retrieve all todo items.
    - Response: 200 OK with an array of todo items in JSON format.
    - Example: `GET http://localhost:3000/todos`

  2. GET /todos/:id
    - Description: Retrieve a specific todo item by ID.
    - Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    - Example: `GET http://localhost:3000/todos/123`

  3. POST /todos
    - Description: Create a new todo item.
    - Request Body: JSON object representing the todo item.
    - Response: 201 Created with the ID of the created todo item in JSON format (e.g., `{ "id": 1 }`).
    - Example: 
      - Request: `POST http://localhost:3000/todos`
      - Request Body: `{ "title": "Buy groceries", "completed": false, "description": "I should buy groceries" }`

  4. PUT /todos/:id
    - Description: Update an existing todo item by ID.
    - Request Body: JSON object representing the updated todo item.
    - Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    - Example: 
      - Request: `PUT http://localhost:3000/todos/123`
      - Request Body: `{ "title": "Buy groceries", "completed": true }`

  5. DELETE /todos/:id
    - Description: Delete a todo item by ID.
    - Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    - Example: `DELETE http://localhost:3000/todos/123`

  For any other route not defined in the server, return a 404 status.
  To test the server, run the `npm run test-todoServer` command in the terminal.
*/

const express = require("express");
const app = express();

app.use(express.json());

module.exports = app;
