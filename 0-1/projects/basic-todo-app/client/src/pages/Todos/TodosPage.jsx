import {useState, useEffect} from 'react';

import useTodos from '../../hooks/useTodos';
import {getAccessToken, removeAccessToken} from '../../services/tokenStroage';
import {CheckBox, PlusIcon, SubmitIcon, TrashIcon} from '../../components';

import './TodosPage.css';
import {useNavigate} from 'react-router';
import todoService from '../../services/todoService';

const TodosPage = () => {
  const {todos, isLoading, setTodos, setError} = useTodos();
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    userId: '',
  });
  const [showInputs, setShowInputs] = useState(false);
  const navigate = useNavigate();

  const createTodo = () => {
    // Implement logic to add new todo (send POST request)
  };

  const updateTodo = todo => {
    // Implement logic to update todo status (send PUT request to update status)
  };

  const deleteTodo = todoId => {
    // Implement logic to delete todo (send DELETE request)
  };

  const logOut = () => {
    removeAccessToken();
    navigate('/');
  };

  useEffect(() => {
    if (!getAccessToken()) navigate('/');
    return () => {
      // Cleanup logic
    };
  }, [navigate]);

  return (
    <>
      <button className="logout-button" onClick={logOut}>
        LogOut
      </button>

      <h1 className="todos-heading">Less is More!</h1>

      <div className="todos-container">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="todos-list">
              {todos.map((todo, index) => (
                <div key={index} className="todo-item">
                  <CheckBox
                    id={todo._id}
                    checked={todo.isComplete}
                    onChange={() => {
                      updateTodo(todo);
                    }}
                  />

                  <label
                    htmlFor={`task${todo._id}`}
                    className={`todo-label ${
                      todo.isComplete ? 'completed' : ''
                    }`}
                  >
                    {todo.title}
                    <span className="todo-description">{todo.description}</span>
                  </label>

                  <TrashIcon
                    className="trash-icon"
                    onClick={() => deleteTodo(todo._id)}
                  />
                </div>
              ))}
            </div>

            <button
              className="add-button"
              onClick={() => setShowInputs(!showInputs)}
            >
              <PlusIcon
                className={`plus-icon ${!showInputs ? '' : 'rotate'}`}
              />
              Add Task
            </button>

            {showInputs && (
              <div className="add-todo">
                <input
                  type="text"
                  placeholder="Task name"
                  value={newTodo.title}
                  onChange={e =>
                    setNewTodo(old => ({...old, title: e.target.value}))
                  }
                />
                <div className="submit-todo">
                  <input
                    type="text"
                    placeholder="Description"
                    value={newTodo.description}
                    onChange={e =>
                      setNewTodo(old => ({...old, description: e.target.value}))
                    }
                    className="description"
                  />
                  <SubmitIcon className="submit-icon" onClick={createTodo} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TodosPage;
