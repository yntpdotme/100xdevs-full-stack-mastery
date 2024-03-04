## My Implementation
<h3 align="center">

[🗂️ Source Code](./src/components/Card.jsx)

<h3>

<p align="center">
 <img width = "600px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="./src/assets/card-input.jpg">
 
 <br>
 <br>
 
 <img width = "800px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="./src/assets/card-output.jpg">

<p>


## Workflow

- `main.jsx` component renders `App.jsx` component

- `App.jsx` component renders `Form.jsx` component which accepts user input.

- `Form.jsx` passed input data to `generateCard()` function after sumbimission which sets state variable named `cardData`.

- One we have `cardData`, `App.jsx` renders `Card.jsx` component and passes `cardData` as props.
