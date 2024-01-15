/*
  Assignment 2:
    Create a component that tracks and displays the number of times it has been rendered.
		Use useRef to create a variable that persists across renders without causing additional renders when it changes.
*/

import { useState } from "react";

const Assignment2 = () => {
	const [, forceRender] = useState(0);

	const handleReRender = () => {
		// Update state to force re-render
		forceRender(Math.random());
	};

	return (
		<div>
			<h2>This component has rendered {0} times.</h2>
			<button onClick={handleReRender}>Force Re-render</button>
		</div>
	);
}

export default Assignment2;