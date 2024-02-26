/*
  Assignment 1:
    Create a React component that performs an expensive calculation (finding the factorial) based on user input.
		Utilize the useMemo hook to ensure the calculation is only recomputed when the input changes, not on every render.
*/

import {useMemo, useState} from 'react';

const Assignment1 = () => {
  const [input, setInput] = useState(0);

  const factorial = number => {
    if (number < 0) return 'Cannot Be Computed';

    let ans = 1;
    for (let i = 2; i <= number; i++) {
      ans *= i;
    }

    return ans;
  };

  const expensiveValue = useMemo(() => {
    return factorial(input);
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={e => setInput(Number(e.target.value))}
        style={{
          padding: ' 15px',
          border: '0',
          'border-radius': '8px',
          background: '#1a1a1a',
          'font-size': '18px',
        }}
      />
      <p>Factorial is: {expensiveValue}</p>
    </div>
  );
};

export default Assignment1;
