import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const addTodo = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const todoDiv = document.getElementById('todos');
    const todoItem = document.createElement('div');
    todoItem.textContent = `Title: ${title}, Description: ${description}`;
    todoDiv.appendChild(todoItem);

    // Clear Input fields
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Basic Todo App</h1>
      <div className="card">
        <label>
          &nbsp;Title:
          <br />
          <input type="text" id="title" />
        </label>
        <br />
        <label>
          &nbsp;Description:
          <br />
          <input type="text" id="description" />
        </label>
        <br />
        <button onClick={addTodo}>Add TODO</button>
        <div id="todos"></div>
      </div>
    </>
  );
}

export default App;
