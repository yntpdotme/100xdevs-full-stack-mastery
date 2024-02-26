/*
  Assignment 1:
    Create a counter component with increment and decrement functions. 
		Pass these functions to a child component which has buttons to perform the increment and decrement actions. 
    Use useCallback to ensure that these functions are not recreated on every render.
*/

import {useState, useCallback, memo} from 'react';

const Assignment1 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

const CounterButtons = memo(({onIncrement, onDecrement}) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    &nbsp;&nbsp;
    <button onClick={onDecrement}>Decrement</button>
  </div>
));

export default Assignment1;
