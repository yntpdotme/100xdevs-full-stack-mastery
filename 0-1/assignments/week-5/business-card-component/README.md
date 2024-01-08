## My Implementation

![Jio Network blocking the view? Network switch reveals the magic!](./src/assets/card.gif)

<h3 align="center">

[Source Code of Business Card Component](./src/components/Card.jsx)

<h3>
<br>

## Workflow

- `main.jsx` component renders `App.jsx` component

- `App.jsx` component renders `Form.jsx` component which accepts user input.

- `Form.jsx` passed input data to `generateCard()` function after sumbimission which sets state variable named `cardData`.

- One we have `cardData`, `App.jsx` renders `Card.jsx` component and passes `cardData` as props.
