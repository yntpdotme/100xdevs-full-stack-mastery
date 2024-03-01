## Course Selling Website Implementation

<h3 align="center">

[🗂️ Source Code](../03-mongo/)

<h3>

### Overview

- Implement a course selling web application with two user types: Admins and Users.

- Admins can sign up and create courses, while Users can sign up, view courses, and purchase them.
- Think of this application as a simplified version of platforms like Udemy.
- Note that this assignment doesn't use proper authentication; instead, include the username and password in the headers for authenticated requests.
  <br><br>

### Technical Requirements

- Use MongoDB to store all data persistently.
  <br><br>

### Admin Routes:

1. **POST /admin/signup**

   - Creates a new admin account.
   - Input Body: { username: 'admin', password: 'pass' }
   - Output: { message: 'Admin created successfully' }

2. **POST /admin/courses**

   - Creates a new course.
   - Input:
     - Headers: { 'username': 'username', 'password': 'password' },
     - Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'http://\_\_\_.com/image' }
   - Output: { message: 'Course created successfully', courseId: "new course id" }

3. **GET /admin/courses**
   - Returns all courses.
   - Input: Headers: { 'username': 'username', 'password': 'password' }
   - Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'http://___.com/image', published: true }, ... ] }
     <br><br>

### User Routes:

1. **POST /users/signup**

   - Creates a new user account.
   - Input: { username: 'user', password: 'pass' }
   - Output: { message: 'User created successfully' }

2. **GET /users/courses**

   - Lists all courses.
   - Input: Headers: { 'username': 'username', 'password': 'password' }
   - Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'http://___.com/image', published: true }, ... ] }

3. **POST /users/courses/:courseId**

   - Purchases a course. Replace courseId in the URL with the course ID.
   - Input: Headers: { 'username': 'username', 'password': 'password' }
   - Output: { message: 'Course purchased successfully' }

4. **GET /users/purchasedCourses**
   - Lists all courses purchased by the user.
   - Input: Headers: { 'username': 'username', 'password': 'password' }
   - Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'http://___.com/image', published: true }, ... ] }
