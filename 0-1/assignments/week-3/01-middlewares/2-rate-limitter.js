const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();

/*
  Rate Limitter
  You have been given an express server with various endpoints. 
  Your task is to implement a global middleware (app.use) that enforces rate limiting for user requests. 
  The rate limit should be set to a maximum of 5 requests per second. 
  If a user exceeds this limit, the server should respond with a 404 error.
  
  Addtional Notes:
    Users will include their user ID in the header as 'user-id'.
    The server should track the number of requests from each user and block further requests if the limit is exceeded. 
    The count for each user resets every second.
*/

let numberOfRequestsForUser = {};
setInterval(() => {
	numberOfRequestsForUser = {};
}, 1000);

app.get("/user", function (req, res) {
	res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
	res.status(200).json({ msg: "created dummy user" });
});

module.exports = app;
