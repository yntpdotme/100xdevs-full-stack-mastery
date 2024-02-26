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

const zod = require('zod');
const express = require('express');
const app = express();

app.use(express.json());

// In-memory array to store todo items
const todos = [];

// Validation Logic
const validateToDo = todo => {
  const Schema = zod.object({
    title: zod.string().min(3),
    description: zod.string().optional(),
    completed: zod.boolean().optional(),
  });

  return Schema.safeParse(todo);
};

/* ----- Retrive ----- */
app.get('/todos', (req, res) => {
  // Return the todos
  res.status(200).json(todos);
});

app.get('/todos/:id', (req, res) => {
  // Check if todo with requested id exists
  const todo = todos.find(todo => todo.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).send(`The todo with the given ID was not found`);

  // Return the todo
  res.status(200).json(todo);
});

/* ----- Create ----- */
app.post('/todos', (req, res) => {
  // Validate the Input
  const input = validateToDo(req.body);
  if (!input.success)
    return res.status(400).send(input.error.issues[0].message);

  // Add todo
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    description: req.body.description || '',
    // completed: req.body.completed  || false,
  };
  todos.push(newTodo);

  // Return the new todo
  res.status(201).json(newTodo);
});

/* ----- Update ----- */
app.put('/todos/:id', (req, res) => {
  // Check if todo with requested id exists
  const todo = todos.find(todo => todo.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).send(`The todo with the given ID was not found`);

  // Validate the Input
  const input = validateToDo(req.body);
  if (!input.success)
    return res.status(400).send(input.error.issues[0].message);

  // Update todo
  todo.title = req.body.title;
  todo.description = req.body.description || '';
  todo.completed = req.body.completed || false;

  // Return the updated todo
  res.status(200).json(todo);
});

/* ----- Delete ----- */
app.delete('/todos/:id', (req, res) => {
  // Check if todo with requested id exists
  const todo = todos.find(todo => todo.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).send(`The todo with the given ID was not found`);

  // Delete todo
  const index = todos.indexOf(todo);
  todos.splice(index, 1);

  // Return the deleted todo
  res.status(200).json(todo);
});

// Handle 404 for any other route
app.use((req, res) => {
  res.status(404).send('Route not found');
});

module.exports = app;
