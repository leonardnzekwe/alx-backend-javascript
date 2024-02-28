// 5-http.js

const http = require("http");
const countStudents = require("./3-read_file_async");

// Create a small HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Parse the URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Handle requests based on URL path
  if (url.pathname === "/") {
    // Return "Hello Holberton School!" for the root path
    res.end("Hello Holberton School!\n");
  } else if (url.pathname === "/students") {
    // Return the list of students for the /students path
    res.write("This is the list of our students\n");
    countStudents(process.argv[2])
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    // Return 404 Not Found for any other path
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  }
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
