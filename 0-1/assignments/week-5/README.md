<a href="./">
  <h1 align="center">Week - 5</h1>
</a>

<p align="center">
  Welcome to my Week Five Assignments repository! Here, you'll find implementations of basic projects.
</p>
<br>

<div align="center">

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)&nbsp; [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

</div>
<br>

<p align="center">
  <a href="#business-card-component"><strong>Business Card Component</strong></a> ·
  <a href="#business-card-generator"><strong>Business Card Generator</strong></a> ·
  <a href="#local-development"><strong>Development Setup</strong></a>
</p>
<br>

## Problem Statements

### [Business Card Component](./business-card-component//README.md)

Develop a simple React App with a reusable Card Component, featuring:

- Customizable props for the Component
- Display of basic information:
  - Name
  - Short description
  - Social Media Handle buttons (LinkedIn, Twitter, etc.)
  - Interests Section

Consider this as a contemporary e-business card and infuse your creativity into the design.
<br><br>

### [Business Card Generator](./busines-card-management-system/README.md)

Extend the basic assignment by implementing the following additional features:

- Create a page where users can add Cards, providing input.
- Develop a backend server to store these cards in a database, supporting basic CRUD operations.
- Enable CRUD operations from the frontend, with the option to restrict access to admin users.
  <br><br>

## Dependencies

- [Node.js](https://nodejs.org/) – JavaScript runtime

- [Express](https://expressjs.com/) – Web application framework

- [MongoDB](https://www.mongodb.com/) – NoSQL database

- [Mongoose](https://mongoosejs.com/) – MongoDB object modeling

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

3. **To run a application**

   ```bash
   # To run Business Card Component
   cd business-card-component
   npm install
   npm run dev


   <<comment
    To run Business Card Management System
        1. set database url at db/index.js
        2. Start Backend
        3. Start Frontend
    comment

   cd busines-card-management-system/backend
   npm install
   npm start

   cd busines-card-management-system/frontend
   npm install
   npm run dev
   ```

   </br>

Feel free to explore each projects's implementation and run it locally to verify their correctness.
Happy coding!
