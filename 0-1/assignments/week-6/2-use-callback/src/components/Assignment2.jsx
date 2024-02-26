/*
  Assignment 2:
    Create a component with a text input field and a button. 
    The goal is to display an alert with the text entered when the button is clicked. 
    Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
    Currently we only have inputText as a state variable and hence you might not see the benefits of useCallback.
    We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.
*/

import {useCallback, useState} from 'react';

const Assignment2 = () => {
  const [inputText, setInputText] = useState('');

  const showAlert = useCallback(() => {
    alert(inputText);
  }, [inputText]);

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="Enter some text"
        style={{
          padding: ' 15px',
          border: '0',
          'border-radius': '8px',
          background: '#1a1a1a',
          'font-size': '18px',
        }}
      />
      <br />
      <Alert showAlert={showAlert} />
    </div>
  );
};

function Alert({showAlert}) {
  return (
    <>
      <button style={{margin: '20px'}} onClick={showAlert}>
        Show Alert
      </button>
    </>
  );
}

export default Assignment2;
