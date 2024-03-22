<h3 align="center">

[🗂️&nbsp; Source Code](../server/)

</h3>
<br>

<h1 align="center">Wallet Application Backend</h1>

- It uses various routes for different functionalities.

- Here's an overview:

<br>

## User Authentication &nbsp; 🔐

### Sign Up

- Endpoint: `/api/v1/auth/signup`

- Method: `POST`

- Description: Register a new account with required information.

### Sign In

- Endpoint: `/api/v1/auth/signin`

- Method: `POST`

- Description: Authenticate and sign in with credentials.

### Sing Out

- Endpoint: `/api/v1/auth/logout`

- Method: `POST`

- Description: Logs out the authenticated user session.

<br>

## User Management &nbsp;👤

### Get All Users

- Endpoint: `/api/v1/users`

- Method: `GET`

- Description: Retrieve all users.

### Update User

- Endpoint: `/api/v1/users/:id`

- Method: `PUT`

- Description: Update a specific users.

<br/>

## Account Management &nbsp;💰

### Get Balance

- Endpoint: `/api/v1/account/balance`

- Method: `GET`

- Description: Retrive balance of current user.

### Transfer Ammount

- Endpoint: `/api/v1/account/transfer`

- Method: `POST`

- Description: Transfer mnoney to another user

<br>

Feel free to explore backend APIs implementation and run it locally to verify it's correctness. Happy coding!