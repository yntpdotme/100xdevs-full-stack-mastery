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

- Method: `GET`

- Description: Logs out the authenticated user session.

### 

- Endpoint: `/api/v1/auth/refresh`

- Method: `POST`

- Description: Refreshes the access token.

<br>

## User Management &nbsp;👤

### Get All Users

- Endpoint: `/api/v1/users`

- Method: `GET`

- Description: Retrieve all users.

### Update User

- Endpoint: `/api/v1/users/me`

- Method: `PATCH`

- Description: Update a specific user.

<br/>

## Wallet Management &nbsp;💰

### Get Balance

- Endpoint: `/api/v1/wallet/balance`

- Method: `GET`

- Description: Retrieves the wallet balance for the authenticated user.

### Doposite Ammount

- Endpoint: `/api/v1/wallet/deposit`

- Method: `POST`

- Description: Allows authenticated users to add funds to their wallet.

### Transfer Ammount

- Endpoint: `/api/v1/wallet/transfer`

- Method: `POST`

- Description: Allows authenticated users to transfer funds to another wallet.

<br>

## Transactions History &nbsp;🧾

### Get All Transactions

- Endpoint: `/api/v1/transactions/`

- Method: `GET`

- Description: Allowed authenticated users to see their past transactions.

<br><br>

Feel free to explore backend APIs implementation and run it locally to verify it's correctness. Happy coding!
