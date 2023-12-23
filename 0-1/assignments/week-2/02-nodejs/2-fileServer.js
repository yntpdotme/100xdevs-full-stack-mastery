/*
  To create an Express HTTP server in Node.js that handles the logic of a file server using the built-in Node.js `fs` module, adhere to the following API specifications:

  1. GET /files
    - Description: Returns a list of files present in the `./files/` directory.
    - Response: 200 OK with an array of file names in JSON format.
    - Example: `GET http://localhost:3000/files`

  2. GET /file/:filename
    - Description: Returns the content of the given file by name. Use the filename from the request path parameter to read the file from the `./files/` directory.
    - Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return "File not found" as text if the file is not found.
    - Example: `GET http://localhost:3000/file/example.txt`

  For any other route not defined in the server, return a 404 status.
  To test the server, run the `npm run test-fileServer` command in the terminal.
*/

const express = require("express");
const fsPromises = require("fs").promises; // Use promises version of fs

const app = express();


module.exports = app;