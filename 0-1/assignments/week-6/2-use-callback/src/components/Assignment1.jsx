/*
  Assignment 1:
    Create a counter component with increment and decrement functions. 
		Pass these functions to a child component which has buttons to perform the increment and decrement actions. 
    Use useCallback to ensure that these functions are not recreated on every render.
*/

import { useState } from "react";

const Assignment1 = () => {
	const [count, setCount] = useState(0);

	// Your code starts here
	function handleIncrement() {

	}

	function handleDecrement() {
		
	}
	// Your code ends here

	return (
		<div>
			<p>Count: {count}</p>
			<CounterButtons
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
			/>
		</div>
	);
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
	<div>
		<button onClick={onIncrement}>Increment</button>
		<button onClick={onDecrement}>Decrement</button>
	</div>
);

export default Assignment1;
