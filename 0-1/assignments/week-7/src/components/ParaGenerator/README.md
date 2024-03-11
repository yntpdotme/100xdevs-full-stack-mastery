## My Implementation

<h3 align="center">

[🗂️ Source Code](./ParaGenerator.jsx)

<h3>

<p align="center">
 <img width = "700px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="../../assets/final-output/para-generator-component.jpg">
 <br>
 <img width = "700px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="../../assets/final-output/para-generator-output.jpg">
</p>

<br>

## Workflow

- `main.jsx` component renders `App.jsx` component

- `App.jsx` handles routing with React Router.

- `App.jsx` component renders `HomePage.jsx` component which displays buttons linking to various components. Clicking a button navigates to the respective component page.

- `ParaGeneratorPage.jsx` renders `ParaGenerator.jsx` component. It also has Back button navigates back to `HomePage.jsx`.

- `ParaGeneratoe.jsx` use `Gemini API` for generating paragraph. It uses `gemini-pro` model with the `generateContent()` method to generate text output.