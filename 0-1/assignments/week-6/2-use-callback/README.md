### [Assignment 1](./src/components/Assignment1.jsx):

- Create a counter component with increment and decrement functions.

- Pass these functions to a child component which has buttons to perform the increment and decrement actions.

- Use useCallback to ensure that these functions are not recreated on every render.

<br>

### [Assignment 2](./src/components/Assignment2.jsx):

- Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked.

- Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.

- Currently we only have inputText as a state variable and hence you might not see the benefits of useCallback

- We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

<br>
