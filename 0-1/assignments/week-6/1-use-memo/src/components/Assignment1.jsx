/*
  Assignment 1:
    Create a React component that performs an expensive calculation (finding the factorial) based on user input.
		Utilize the useMemo hook to ensure the calculation is only recomputed when the input changes, not on every render.
*/

import { useState } from "react";

const Assignment1 = () => {
	const [input, setInput] = useState(0);

	// Your solution starts here
	const expensiveValue = 0;
	// Your solution ends here

	return (
		<div>
			<input
				type="number"
				value={input}
				onChange={(e) => setInput(Number(e.target.value))}
			/>
			<p>Calculated Value: {expensiveValue}</p>
		</div>
	);
};

export default Assignment1;
