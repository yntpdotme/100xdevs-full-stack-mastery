/* 
	You have been given an express server with various endpoints. Your tasks are:
		1. Ensure that if there is ever an exception in any endpoint, the end user sees a status code of 404.
		2. Maintain the errorCount variable, which should increment every time there is an exception in any endpoint.
*/

const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();

let errorCount = 0;

app.get("/user", function (req, res) {
	throw new Error("User not found");
	res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
	res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
	res.status(200).json({ errorCount });
});

module.exports = app;
