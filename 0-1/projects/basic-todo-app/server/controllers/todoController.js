import {Todo} from '../models/todo.js';
import {validateCreation, validateUpdate} from '../validators/types.js';

const getAllTodos = async (req, res) => {
  const todos = await Todo.find({}, {__v: 0}).sort({isComplete: 1, title: 1});

  res.json(todos);
};

const getTodoById = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo)
    return res.status(404).send('The todo with the given ID was not found');

  const {__v, ...todoData} = todo.toObject();
  res.json({
    status: 'success',
    message: 'Todo retrieved successfully',
    data: todoData,
  });
};

const createTodo = async (req, res) => {
  const {error} = validateCreation(req.body);
  if (error) return res.status(400).send(error.issues[0].message);

  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });
  await todo.save();

  const {__v, ...todoData} = todo.toObject();
  res.status(201).json({
    status: 'success',
    message: 'Todo created successfully',
    data: todoData,
  });
};

const updateTodoById = async (req, res) => {
  const {error} = validateUpdate(req.body);
  if (error) return res.status(400).send(error.issues[0].message);

  // Build the update object based on user input
  const updateObject = {};
  const {title, description, isComplete} = req.body;
  if (title) updateObject.title = title;
  if (description) updateObject.description = description;
  if (isComplete !== undefined) updateObject.isComplete = isComplete;

  const todo = await Todo.findByIdAndUpdate(req.params.id, updateObject, {
    new: true,
  });

  if (!todo)
    return res.status(404).send('The todo with the given ID was not found');

  const {__v, ...todoData} = todo.toObject();
  res.status(201).json({
    status: 'success',
    message: 'Todo updated successfully',
    data: todoData,
  });
};

const deleteTodoById = async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo)
    return res.status(404).send('The todo with the given ID was not found');

  const {__v, ...todoData} = todo.toObject();
  res.json({
    status: 'success',
    message: 'Todo deleted successfully',
    data: todoData,
  });
};

export {getAllTodos, getTodoById, createTodo, updateTodoById, deleteTodoById};
