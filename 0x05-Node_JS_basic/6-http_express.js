// 6-http_express.js

const express = require("express");

// Create an Express application
const app = express();

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

// Handle 404 Not Found errors
app.use((req, res) => {
  res
    .status(404)
    .send(
      '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ' +
        req.url +
        "</pre></body></html>",
    );
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
