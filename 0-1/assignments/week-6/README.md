<a href="./">
  <h1 align="center">Week - 6</h1>
</a>

<p align="center">
  Welcome to my Week Six Assignments repository! Here, you'll find solutions of all tasks.
</p>
<br>

<div align="center">

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)&nbsp; [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

</div>
<br>

<p align="center">
  <a href="#usememo-hook"><strong>useMemo</strong></a> ·
  <a href="#usecallback-hook"><strong>useCallback</strong></a> ·
  <a href="#useref-hook"><strong>useRef</strong></a> ·
  <a href="#local-development"><strong>Development Setup</strong></a>
</p>
<br>

## Problem Statements

### [useMemo Hook](./1-use-memo/README.md)

#### [Task 1](./1-use-memo/src/components/Assignment1.jsx):

- Create a React component that performs an expensive calculation (finding the factorial) based on user input.

- Utilize the useMemo hook to ensure the calculation is only recomputed when the input changes, not on every render.

#### [Task 2](./1-use-memo/src/components/Assignment2.jsx):

- In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.

- The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
- You will learn something new here, specifically how you have to pass more than one value in the dependency array.

#### [Task 3](./1-use-memo/src/components/Assignment3.jsx):

- You have been given a list of items you shopped from the grocery store

- You need to calculate the total amount of money you spent

<br><hr><br>

### [useCallback Hook](./2-use-callback/README.md)

#### [Task 1](./2-use-callback/src/components/Assignment1.jsx):

- Create a counter component with increment and decrement functions.

- Pass these functions to a child component which has buttons to perform the increment and decrement actions.

- Use useCallback to ensure that these functions are not recreated on every render.

#### [Task 2](./2-use-callback/src/components/Assignment2.jsx):

- Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked.

- Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.

- Currently we only have inputText as a state variable and hence you might not see the benefits of useCallback

- We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

<br><hr><br>

### [useRef Hook](./3-use-Ref/README.md)

#### [Task 1](./3-use-Ref/src/components/Assignment1.jsx):

- Create a component with a text input field and a button.

- When the component mounts or the button is clicked, automatically focus the text input field using useRef.

#### [Task 2](./3-use-Ref/src/components/Assignment2.jsx):

- Create a component that tracks and displays the number of times it has been rendered.

- Use useRef to create a variable that persists across renders without causing additional renders when it changes.

<br><br>

## Dependencies

- [Node.js](https://nodejs.org/) – JavaScript runtime

- [React](https://react.dev/): JavaScript library for web and native UI.
  <br><br><br>

## Local Development

Ensure you have Node.js installed on your machine. Follow the steps below to install and run the assignments:

1. **Install nvm (Node Version Manager)**

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

2. **Install Node.js LTS version**

   ```bash
   nvm install --lts
   ```

3. **To run a Assignment**

   ```bash
   # To run task
   cd folder_Name
   npm install
   npm run dev


   << comment
      Within the chosen folder, justComment on the specific Assignment
      component you want to work on (`<Assignment1/>` or `<Assignment2/>`...)
    comment
   ```

   </br>

Feel free to explore each components's implementation and run it locally to verify their correctness. Happy coding!
