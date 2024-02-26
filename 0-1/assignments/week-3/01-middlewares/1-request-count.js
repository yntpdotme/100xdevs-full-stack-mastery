/* 
	Request Counter:
	You have been provided with an Express server containing several endpoints.
	Your task is to implement a global middleware using `app.use` that maintains
	a count of the total number of requests made to the server. 
	The count should be stored in the global variable `requestCount`.
*/

const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

const requestCounter = (req, res, next) => {
  requestCount++;
  next();
};

app.use(requestCounter);

app.get('/user', function (req, res) {
  res.status(200).json({name: 'john'});
});

app.post('/user', function (req, res) {
  res.status(200).json({msg: 'created dummy user'});
});

app.get('/requestCount', function (req, res) {
  res.status(200).json({requestCount});
});

module.exports = app;
