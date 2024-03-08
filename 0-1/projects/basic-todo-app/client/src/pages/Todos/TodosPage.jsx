import {useState, useEffect} from 'react';
import {jwtDecode} from 'jwt-decode';

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
    if (!newTodo.title || !newTodo.description) return;

    const oldTodos = [...todos];
    const {_id: userId} = jwtDecode(getAccessToken());

    // Update the UI
    newTodo.userId = userId;
    setTodos([...todos, newTodo]);

    // API Call
    todoService
      .createTodo(newTodo)
      .then(({data: savedTodo}) => {
        setTodos([...todos, savedTodo.data]);
        setNewTodo({
          title: '',
          description: '',
          userId: '',
        });
      })
      .catch(err => {
        setError(err.message);
        setTodos(oldTodos);
      });
  };

  const updateTodo = todo => {
    const oldTodos = [...todos];
    const updatedTodo = {...todo, isComplete: !todo.isComplete};

    // Update the UI
    setTodos(todos.map(t => (t._id === todo._id ? updatedTodo : t)));

    // API Call
    todoService.updateTodo(updatedTodo).catch(err => {
      setError(err.message);
      setTodos(oldTodos);
    });
  };

  const deleteTodo = todoId => {
    const oldTodos = [...todos];

    // Update the UI
    setTodos(todos.filter(t => t._id !== todoId));

    // API Call
    todoService.deleteTodo(todoId).catch(err => {
      setError(err.message);
      setTodos(oldTodos);
    });
  };

  const logOut = () => {
    removeAccessToken();
    navigate('/');
  };

  useEffect(() => {
    if (!getAccessToken()) navigate('/');
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
