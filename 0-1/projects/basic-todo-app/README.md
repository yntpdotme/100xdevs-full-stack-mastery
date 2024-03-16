<h1 align="center">Basic Todo App</h1>

<p align="center">
  A MERN project for practicing the tech-stack.
</p>

<p align=center>
  <img width = "700px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="./assets/mern.png">
<p>

<div align= "center">

[![Twitter Badge](https://img.shields.io/badge/-@KadlagAkash-1ca0f1?style=flat&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/KadlagAkash)](https://twitter.com/KadlagAkash) &nbsp; [![Linkedin Badge](https://img.shields.io/badge/-KadlagAkash-0e76a8?style=flat&labelColor=0e76a8&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kadlagakash/) &nbsp; [![Mail Badge](https://img.shields.io/badge/-akashkadlag14-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:akashkadlag14@gmail.com) &nbsp; [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)&nbsp; [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

</div>

<h2 align="center">

[🗂️&nbsp; Frontend](./client/README.md)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Backend &nbsp;📂](./server/README.md)

</h2>
<br>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> 
	·&nbsp;<a href="#features"><strong>Features</strong></a> 
	·&nbsp;<a href="#tech-stack"><strong>Tech Stack</strong></a>
	·&nbsp;<a href="#local-development"><strong>Development Setup</strong></a> 
</p>
<br>

## <a name="introduction">❄️&nbsp; Introduction</a>

To-Do App created during Week-5 of 100xDevs Cohort by Harkirat Singh.

<p align=center>
	<img width = "550px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="./assets/frontend.png">
<p>
<br>

## <a name="features">🔋&nbsp; Features</a>

- **Organized File and Folder Structure**: Maintain a well-organized file and folder structure for easy navigation and management.

- **Intuitive UI**: Well-organized and intuitive user interface design for a smooth user experience.

- **Custom Hook**: Efficient data management with a custom hook.

- **Schema Validation**: Enforced schema validation on both frontend and backend for enhanced data integrity.

- **Backend Integration**: Seamless backend integration for CRUD operations on todos.

- **Secure Authentication**: Robust user authentication with JWT token implementation.

- **Security Measures**: Implemented production security measures.

- **Documentation**: For clarity & a local development setup guide.
  <br><br>

## <a name="tech-stack">⚙️&nbsp; Tech Stack</a>

- [MongoDB](https://www.mongodb.com/) – NoSQL database
- [Express](https://expressjs.com/) – Web application framework
- [React](https://react.dev/) – library for building UI
- [Node.js](https://nodejs.org/) – JavaScript runtime
- [Mongoose](https://mongoosejs.com/) – MongoDB object modeling
- [RESTful API](https://restfulapi.net/) – API design principles
- [Git](https://git-scm.com/) – versioning
- [Vite](https://vitejs.dev/) – building
  <br><br>

## <a name="local-development"> 🖥️&nbsp;&nbsp; Local Development</a>

0.  **Prerequisites** <br>
    Make sure you have the following installed on your machine:

    - [Git](https://git-scm.com/)
    - [Node.js](https://nodejs.org/en)
    - [npm](https://www.npmjs.com/) (Node Package Manager)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/KadlagAkash/100xdevs-full-stack-mastery.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd 100xdevs-full-stack-mastery/0-1/projects/basic-todo-app/
    ```

3.  **Setup Backend:**

    - **Navigate to the Backend Codebase:**

      ```bash
      cd server/
      ```

    - **Install dependencies:**

      ```bash
      npm install
      ```

    - **Add Environment Variables:**

      ```bash
      touch .env
      cat >> .env
      DB_URL = "your_mongo_db_connection_string"

      JWT_SECRET_KEY = "your_secret_key"
      (Control+D to terminate)
      ```

    - **Run the Server:**

      ```bash
      npm run dev
      ```

4.  **Setup Frontend:**

    - **Navigate to the Fronend Codebase:**

      ```bash
      cd frontend/
      ```

    - **Install dependencies:**

      ```bash
      npm install
      ```

    - **Add Environment Variables:**

      ```bash
      touch .env
      cat >> .env
      VITE_API_BASE_URL = 'enter_api_base_url'
      (Control+D to terminate)
      ```

    - **Run the App:**

      ```bash
      npm run dev
      ```
    - **Open your browser:**

      Visit [http://localhost:5173](http://localhost:5173) to explore the todo application.

    <br><br>

## 🤝&nbsp;&nbsp;Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](../../../CONTRIBUTING.md) for ways to get started.
</br></br>

## 🪪&nbsp;&nbsp; Licensing Information

- It is licensed under the [MIT License](./LICENSE). Feel free to learn, add upon, and share!
