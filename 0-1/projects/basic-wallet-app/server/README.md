<h1 align="center">Wallet Application Backend</h1>

<h3 align="center">

[🗂️&nbsp; Source Code](../server/)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[📑&nbsp; API Docs](https://documenter.getpostman.com/view/31850881/2sA3Bn7srM) 

</h3>

<br>

- This codebase contains the backend logic for the **Wallet** app.

- Dive into the codebase to explore the inner workings of Wallet App's backend.

<br>

## User Authentication &nbsp; 🔐

### - Sign Up

- Endpoint: `/api/v1/auth/signup`

- Method: `POST`

- Description: Register a new account with required information.

### - Sign In

- Endpoint: `/api/v1/auth/signin`

- Method: `POST`

- Description: Authenticate and sign in with credentials.

### - Sing Out

- Endpoint: `/api/v1/auth/signout`

- Method: `GET`

- Description: Sign out the authenticated user session.

### - Refresh Token

- Endpoint: `/api/v1/auth/refresh`

- Method: `POST`

- Description: Refreshes the access token.

<br>

## User Management &nbsp;👤

### - Get All Users

- Endpoint: `/api/v1/users`

- Method: `GET`

- Description: Retrieve all users.

### - Get Current User

- Endpoint: `/api/v1/users/me`

- Method: `GET`

- Description: Get a current user.

### - Update Current User

- Endpoint: `/api/v1/users/me`

- Method: `PATCH`

- Description: Update a current user.

<br/>

## Wallet Management &nbsp;💰

### - Get Balance

- Endpoint: `/api/v1/wallet/balance`

- Method: `GET`

- Description: Retrieves the wallet balance for the authenticated user.

### - Doposite Ammount

- Endpoint: `/api/v1/wallet/deposit`

- Method: `POST`

- Description: Allows authenticated users to add funds to their wallet.

### - Transfer Ammount

- Endpoint: `/api/v1/wallet/transfer`

- Method: `POST`

- Description: Allows authenticated users to transfer funds to another wallet.

<br>

## Transactions History &nbsp;🧾

### - Get All Transactions

- Endpoint: `/api/v1/transactions/`

- Method: `GET`

- Description: Allowed authenticated users to see their past transactions.

<br>

Feel free to explore backend APIs implementation and run it locally to verify it's correctness. Happy coding!

<br><br>

<h1 align="center">🖥️&nbsp;&nbsp; Local Development</h1>

1. **Navigate to the Backend Codebase:**

    ```bash
    cd server/
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Add Environment Variables:**

    Create .env file in the root folder and copy paste the content of .env.sample.

    ```bash
    cp .env.sample .env
    ```

    If required, add necessary credentials.

4.  **Start the Server:**

    ```bash
    npm start
    ```

5. **Explore the API:**

	  Access the project APIs at the specified endpoints using [API Docs](https://documenter.getpostman.com/view/31850881/2sA3Bn7srM).

<br><br>

Feel free to explore backend APIs implementation and run it locally to verify it's correctness. Happy coding!