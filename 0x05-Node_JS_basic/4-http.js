const http = require('http');

/**
 * The HTTP server instance.
 *
 * @type {import('http').Server}
 */
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {});
module.exports = app;
