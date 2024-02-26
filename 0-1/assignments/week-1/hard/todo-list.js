/*
	Question:
	Implement a class Todo with methods for adding, removing, updating, and retrieving todos. The class should also provide a method to clear all todos.

	Description:
  Class: Todo
  Description: Implements a basic Todo list with methods for adding, removing, updating, and retrieving todos.
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  /*
    Method: add
    Parameter: todo (string)
    Description: Adds a todo to the list of todos.
  */
  add(todo) {
    this.todos.push(todo);
  }

  /*
    Method: remove
    Parameter: indexOfTodo (number)
    Description: Removes a todo from the list of todos at the specified index.
  */
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  /*
    Method: update
    Parameters: index (number), updatedTodo (string)
    Description: Updates the todo at the given index with the provided value.
  */
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  /*
    Method: getAll
    Description: Returns all todos in the list.
  */
  getAll() {
    return this.todos;
  }

  /*
    Method: get
    Parameter: indexOfTodo (number)
    Description: Returns the todo at the specified index.
  */
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  /*
    Method: clear
    Description: Deletes all todos from the list.
  */
  clear() {
    this.todos = [];
  }
}

// Example usage
const todoList = new Todo();

todoList.add('Revise Cohort-1');
console.log(todoList.getAll());

todoList.add('Assignment Submission');
console.log(todoList.getAll());

todoList.remove(1);
console.log(todoList.getAll());

todoList.add('LinkedIn Post');
console.log(todoList.getAll());

todoList.update(1, 'LinkedIn-Twitter Post');
console.log(todoList.getAll());

console.log(todoList.get(5)); // null

todoList.clear();
console.log(todoList.getAll());

// Export the Todo class for reuse in other modules
module.exports = Todo;
