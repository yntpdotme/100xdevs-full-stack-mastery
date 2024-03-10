/*
  Assignment 1:
		Create a component with a text input field and a button. 
		When the component mounts or the button is clicked, automatically focus the text input field using useRef.
*/

import {useEffect, useRef, useCallback} from 'react';

const Assignment1 = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const handleButtonClick = useCallback(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text here"
        style={{
          padding: ' 15px',
          border: '0',
          'border-radius': '8px',
          background: '#1a1a1a',
          'font-size': '18px',
        }}
      />
      <br />
      <br />

      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

export default Assignment1;
