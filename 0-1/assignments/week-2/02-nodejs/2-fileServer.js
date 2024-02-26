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

const express = require('express');
const fsPromises = require('fs').promises; // Use promises version of fs

const app = express();

// GET /files
app.get('/files', async (req, res) => {
  try {
    const files = await fsPromises.readdir('./files');
    res.json(files);
  } catch (error) {
    res.status(500).json({error: 'Internal Server Error'});
  }
});

// GET /file/:filename
app.get('/file/:filename', async (req, res) => {
  const {filename} = req.params;
  const filePath = `./files/${filename}`;

  try {
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    res.send(fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).send('File not found');
    } else {
      res.status(500).json({error: 'Internal Server Error'});
    }
  }
});

// Handle 404 for any other route
app.use((req, res) => {
  res.status(404).send('Route not found');
});

module.exports = app;
