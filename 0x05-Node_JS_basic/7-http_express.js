// 7-http_express.js

const express = require("express");
const countStudents = require("./3-read_file_async");

// Create an Express application
const app = express();

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

// Define a route for /students path
app.get("/students", (req, res) => {
  res.write("This is the list of our students\n");
  countStudents(process.argv[2])
    .then(() => {
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
