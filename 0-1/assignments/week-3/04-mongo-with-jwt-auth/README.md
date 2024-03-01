## Course Selling Website with JWT Authentication

<h3 align="center">

[🗂️ Source Code](../04-mongo-with-jwt-auth/)

<h3>

### Overview

- Build a course selling web application with enhanced security using JSON Web Tokens (JWT) for authentication.
- MongoDB is used for persistent data storage.

## Routes

### Admin Routes:

1. **POST /admin/signup**

   - Description: Creates a new admin account.
   - Input Body: { username: 'admin', password: 'pass' }
   - Output: { message: 'Admin created successfully' }

2. **POST /admin/signin**

   - Description: Logs in an admin account.
   - Input Body: { username: 'admin', password: 'pass' }
   - Output: { token: 'your-token' }

3. **POST /admin/courses**

   - Description: Creates a new course.
   - Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'http://\_\_\_.com/image' }
   - Output: { message: 'Course created successfully', courseId: "new course id" }

4. **GET /admin/courses**
   - Description: Returns all courses.
   - Input: Headers: { 'Authorization': 'Bearer <your-token>' }
   - Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'http://___.com/image', published: true }, ... ] }

### User Routes

5. **POST /users/signup**

   - Description: Creates a new user account.
   - Input: { username: 'user', password: 'pass' }
   - Output: { message: 'User created successfully' }

6. **POST /users/signin**

   - Description: Logs in a user account.
   - Input: { username: 'user', password: 'pass' }
   - Output: { token: 'your-token' }

7. **GET /users/courses**

   - Description: Lists all courses.
   - Input: Headers: { 'Authorization': 'Bearer <your-token>' }
   - Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'http://___.com/image', published: true }, ... ] }

8. **POST /users/courses/:courseId**

   - Description: Purchases a course. Replace courseId in the URL path with the ID of the course to be purchased.
   - Input: Headers: { 'Authorization': 'Bearer <your-token>' }
   - Output: { message: 'Course purchased successfully' }

9. **GET /users/purchasedCourses**
   - Description: Lists all courses purchased by the user.
   - Input: Headers: { 'Authorization': 'Bearer <your-token>' }
   - Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'http://___.com/image', published: true }, ... ] }
