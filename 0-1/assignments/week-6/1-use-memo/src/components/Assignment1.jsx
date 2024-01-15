/*
  Assignment 1:
    Create a React component that performs an expensive calculation (finding the factorial) based on user input.
		Utilize the useMemo hook to ensure the calculation is only recomputed when the input changes, not on every render.
*/

import { useMemo, useState } from "react";

const Assignment1 = () => {
	const [input, setInput] = useState(0);

	const factorial = (number) => {
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
				onChange={(e) => setInput(Number(e.target.value))}
			/>
			<p>Calculated Value: {expensiveValue}</p>
		</div>
	);
};

export default Assignment1;
