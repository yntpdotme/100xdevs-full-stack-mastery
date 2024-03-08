import {useEffect, useState} from 'react';
import todoService from '../services/todoService';
import {CanceledError} from '../services/apiClient';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const {request, cancel} = todoService.getAllTodos();
    request
      .then(res => {
        setTodos(res.data);
      })
      .catch(error => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => {
        // Simulate loader delay for 1 seconds
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });

    return () => cancel();
  }, []);

  return {todos, error, isLoading, setTodos, setError};
};

export default useTodos;
